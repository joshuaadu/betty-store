import styles from "../styles/Table.module.scss";

const Table = ({ keys, data }: any) => {
	return (
		<table className={styles.table}>
			<thead className={styles.header}>
				<tr>
					<th>
						<input type="checkbox" />
					</th>
					{keys.map((key: string, index: number) => (
						<th key={index}>{key}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.products.map((item: object | any, index: number) => (
					<tr key={index}>
						<td>
							<input type="checkbox" />
						</td>
						{keys.map((key: string, index: number) => (
							<td key={index}>{item[key.toLowerCase()]}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
