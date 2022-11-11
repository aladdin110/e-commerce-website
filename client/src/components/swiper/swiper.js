import { Swiper, SwiperSlide } from "swiper/react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pagination, Autoplay, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "./swiper.scss";

export default function Swiper1() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      breakpoints={{
        // when window width is >= 640px
        640: {
          width: 600,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 1,
        },
      }}
      autoplay={{
        delay: 11111111111111,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <SwiperElement price="199.00$" />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperElement price="1995.00$" />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperElement price="1949.00$" />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperElement price="1399.00$" />
      </SwiperSlide>
    </Swiper>
  );
}

function SwiperElement(props) {
  return (
    <div className="swiperElement container">
      <div className="col-6 LeftSide Animate">
        <div className="newProduct">New Arrival</div>
        <div className="Description1">
          <h2 className="Description">Modern Furniture For Decoration</h2>
        </div>
        <div
          style={{
            marginTop: "2rem",
            height: "2px",
            backgroundColor: "#d9d9d9",
            width: "150px",
          }}
        ></div>
        <div className="phrase">
          <p>We are experts in curtain and blinds We have.</p>
        </div>
        <div className="swiperPrice">
          <h3 className="Only">ONLY</h3>
          <div className="Price">{props.price}</div>
        </div>
        <button className="ShopNow">SHOP NOW</button>
      </div>
      <div className="col-6 RightSide Animate">
        <div className="ImgBackGroundColor"></div>
        <div className="ProductImg">
          <img
            className="ImgPosition"
            src="https://demo.phlox.pro/shop-decoration/wp-content/uploads/sites/136/2022/04/Wooden20Table.H03.2k-647x647.png"
            alt="img"
            height={"90%"}
            width={"90%"}
          />
        </div>
      </div>
    </div>
  );
}
