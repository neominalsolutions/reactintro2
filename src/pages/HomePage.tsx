// page componentler sadece route üzerinden çağırılmalıdır.
// element olarak sayfada <AboutPage /> şeklinde çağırılması doğru değildir.
// page component props değerleri almaya ihtiyaç duymaz
// page component içerisinde veri çekilip child componentlere props ile veri geçilir.
// page componentler bu özelliği ile parent component olarak çalışırlar.

export default function HomePage() {
	return (
		<>
			<h1>Anasayfa</h1>
		</>
	);
}
