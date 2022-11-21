import React, { useState } from 'react';
import Input from '../../Forms/Input';
import Select from '../../Forms/Select';
import CustomDatePicker from '../../Forms/Datepicker';
import { Container } from './style';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';

import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Sidebar({ data }) {
	const formik = useFormik({
		initialValues: {
			buyingDate: '',
			cardBank: '',
			deadlineDate: '',
			expense: '',
			method: '',
			price: '',
		},
	});

	return (
		<Container>
			<div className="sidebar__header">
				<RiMoneyDollarCircleLine className="sidebar__header--icon" />
				<h3>Meu Controle Financeiro</h3>
			</div>
			<form onSubmit={formik.handleSubmit}>
				<Select
					handleChange={formik.handleChange}
					name="method"
					options={data.method}
					title="Forma de Pagamento"
					value={formik.values.method}
				/>

				{formik.values.method === 'credit' && (
					<>
						<Select
							handleChange={formik.handleChange}
							name="cardBank"
							options={data.bank}
							title="Qual cartão"
							value={formik.values.cardBank}
						/>
						<CustomDatePicker
							date={formik.values.deadlineDate}
							handleChange={formik.handleChange}
							label="Vencimento da fatura"
							name="deadlineDate"
						/>
					</>
				)}
				<Input
					handleChange={formik.handleChange}
					label="Preço"
					name="price"
					placeholder="Valor do produto (ou a soma)"
					value={formik.values.price}
				/>
				<Select
					handleChange={formik.handleChange}
					name="expense"
					options={data.type}
					title="Tipo de Despesa"
					value={formik.values.expense}
				/>
				<CustomDatePicker
					date={formik.values.buyingDate}
					handleChange={formik.handleChange}
					label="Data da Compra"
					name="buyingDate"
				/>

				<div className="sidebar__wrapper-buttons">
					<button type="submit">Enviar</button>
					<button type="submit">Limpar </button>
				</div>
			</form>
		</Container>
	);
}
