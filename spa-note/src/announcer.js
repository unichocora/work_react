export function announcePageTitle(){
    const el = document.getElementById('announcer');
    //タイトル用の文字列は都合の良い方法で参照すればよい
    const tEL = document.querySelector('[data-page-title');
    const title = tEL.value || tEL.textContent;
    document.title = title;
    el.textContent = 'ページ[${title}]を開きました';
}