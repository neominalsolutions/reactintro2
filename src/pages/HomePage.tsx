// page componentler sadece route üzerinden çağırılmalıdır.
// element olarak sayfada <AboutPage /> şeklinde çağırılması doğru değildir.
// page component props değerleri almaya ihtiyaç duymaz
// page component içerisinde veri çekilip child componentlere props ile veri geçilir.
// page componentler bu özelliği ile parent component olarak çalışırlar.

import { Box, Grid } from '@mui/material';

export default function HomePage() {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'flex-start',
					flexWrap: 'wrap',
				}}
			>
				<h1>Anasayfa</h1>
				<Grid container spacing={2}>
					<Grid sx={{ border: '1px solid red' }} xs={6} md={8}>
						Grid-1
					</Grid>
					<Grid sx={{ border: '1px solid red' }} xs={6} md={4}>
						Grid-2
					</Grid>
					<Grid sx={{ border: '1px solid red' }} xs={12} md={3}>
						Grid-3
					</Grid>
					<Grid sx={{ border: '1px solid red' }} xs={12} md={9}>
						Grid-4
					</Grid>
				</Grid>
			</Box>
		</>
	);
}
