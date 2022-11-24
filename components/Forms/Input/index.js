import React from 'react';
import { Container } from './style';

export default function Input({ name, placeholder, icon, label, handleChange }) {
	return (
		<Container>
			<label className="sidebar__input-label" htmlFor={name}>
				{label}
			</label>
			<div className="sidebar__input-wrapper">
				<div className="sidebar__input-icon">{icon && icon}</div>
				<input
					className="sidebar__input-item"
					name={name}
					placeholder={placeholder}
					onChange={handleChange}
				/>
			</div>
		</Container>
	);
}
