// https://your.uniqodo.com/code.php?promo-name=PROMOTION_2
const testPromotion = async () => {
  try {
    let promotionSpan =  document.querySelectorAll('.promo.badge.badge-info span');

    if(promotionSpan.length){
      for (const element of promotionSpan) {
        if(element.innerHTML)
          const getData = await fetch("https://your.uniqodo.com/code.php?promo-name=" + element.innerHTML)
             .then(res => {return res.json();})
             .catch(error => console.log("error"))

          element.innerHTML = getData?.code;

      }
    }

    return true;

  } catch (e) {
    console.log("Handle e")
  }
}

window.addEventListener("popstate", testPromotion);
document.addEventListener("DOMContentLoaded", () => {
    testPromotion().then(r => console.log("Changed"))
})

