import styles from "../styles/Table.module.scss";

const Table = ({ keys, data }: any) => {
	return (
		<table className={styles.table}>
			<thead className={styles.header}>
				<tr>
					{keys.map((key: string) => (
						<th>{key}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.products.map((item: object | any) => (
					<tr>
						{keys.map((key: string) => (
							<td>{item[key.toLowerCase()]}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
