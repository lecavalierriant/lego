function initialize() {
	table = document.querySelectorAll("table")[0];
	table.querySelectorAll("a").forEach(
		a => {
			a.href =
				"https://www.lego.com/en-us/service/buildinginstructions/" +
				a.href.split("/")[a.href.split("/").length - 1]
			;
		}
	);
	table.querySelectorAll("img").forEach(
		img => {
			img.src =
				"https://www.lego.com/cdn/product-assets/product.img.pri/" +
				img.src.split("/")[img.src.split("/").length - 1] +
				".jpg"
			;
		}
	);
}
