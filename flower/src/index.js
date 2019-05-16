import icon from "./icon/iconfont.css";
import flex from "./js/libs/flexible";
import sass from "./sass/index.scss";
import axios from "axios";
const main = document.querySelector(".main");

axios.get("/api/list").then((res) => {
    var data = res.data.data.Datas.FlowerList;
    main.innerHTML = data.map((item) => {
        return `<li>
                <dt>
                    <img src="${item.Image}" alt="">
                </dt>
                <dd>
                    <h4>${item.Name}</h4>
                    <p>${item.Introduction}</p>
                    <b class="${item.NowPromo?"b":""}">${item.NowPromo?item.NowPromo:""}</b>
                    <div class="price">
                        <h5>${item.Price}</h5>
                        <strong>${item.LinePrice}</strong>
                    </div>
                    <span>${item.Sales}</span>
                </dd>
            </li>`;
    }).join("");
})