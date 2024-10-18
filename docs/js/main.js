

$(function(){

	//開いた時にクリップボードに貼り付けている文字列を自動挿入する
	$("#btn-paste").on("click", async () => {
		const text = await navigator.clipboard.readText();
		$("#text-src").val(text);
	})

	$("#btn").on("click", () => {
		convert_text();
	})
});

/**
 * convert
 */
const convert_text = () => {

	$("#message").hide();

	let val = $("#text-src").val();
	
	//全角スペースを半角スペースに変更
	val = val.replaceAll("　", " ");

	//「・」を半角スペースに変更
	val = val.replaceAll("・", " ");
	
	$("#text-src").val(val);
	
	//コピーする
	navigator.clipboard.writeText(val);

	$("#message").show();
	setTimeout(() => {
		$("#message").fadeOut();
	}, 3000);
}