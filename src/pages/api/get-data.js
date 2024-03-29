import { GoogleSpreadsheet } from "google-spreadsheet";

const doc = new GoogleSpreadsheet(process.env.SHEET_ID);

const toOriginal = (value) => {
	const buff = Buffer.from(value, "base64");
	return buff.toString("ascii");
};

export default async (req, res) => {
	try {
		await doc.useServiceAccountAuth({
			client_email: process.env.CLIENT_EMAIL,
			private_key: process.env.SECRET_KEY,
		});

		await doc.loadInfo();

		const sheetSettings = await doc.sheetsByTitle.Settings;
		const sheetType = await doc.sheetsByTitle.type;

		await sheetType.loadCells();
		const sheetSettingsRows = await sheetSettings.getRows();

		const settings = {
			method: [],
			bank: [],
			type: [],
		};
		sheetSettingsRows.forEach((row) => {
			settings.method.push({
				value: row["Payment Methods key"],
				label: row["Payment Methods value"],
			});

			settings.bank.push({
				value: row["Bank cards key"],
				label: row["Bank cards value"],
			});
		});

		let i = 0;
		while (await sheetType.getCell(0, i).value) {
			settings.type.push({
				value: await sheetType.getCell(0, i).value.toLowerCase(),
				label: await sheetType.getCell(0, i).value,
			});
			i++;
		}

		res.status(200).send(settings);
	} catch (error) {
		res.status(500).send(`${error.message}`);
	}
};
