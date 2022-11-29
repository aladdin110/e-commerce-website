import "../../assets/styles/style.scss";
import ProductForm from "../../components/admin/ProductForm";


const Products = () => {
    return (
        <div className="login-register-area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                        <ProductForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;