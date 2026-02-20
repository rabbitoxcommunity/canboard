import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function ProductDetails() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams()
    const SHEET_ID = '15vpUs1YPXpmQ5togjWU1DLp6n6wuaMWeQyOBSvQUk8o';
    const API_KEY = 'AIzaSyDtwPXcPaZ2gJCYCP8Ci0UAooHF-fgMRtA';
    const SHEET_NAME = 'panelex';
    const RANGE = 'A1:L';
    const fetchProducts = async () => {
        try {
            setLoading(true);
            const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}!${RANGE}?key=${API_KEY}`;

            const response = await fetch(url);
            const data = await response.json();

            if (data.values && data.values.length > 1) {
                const headers = data.values[0];
                const rows = data.values.slice(1);

                const formattedProducts = rows.map((row, index) => {
                    const product = { id: index + 1 };
                    headers.forEach((header, columnIndex) => {
                        product[header] = row[columnIndex] || '';
                    });

                    return product;
                });

                setProducts(formattedProducts);
            } else {
                setProducts([]);
            }

            console.log(data, 'test')
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [id]);

    const productDetails = products?.find(product => product.id === parseInt(id))



    const getRelatedProducts = (products, currentProductId, currentCategory) => {
        return products
            .filter(
                (product) =>
                    product.category === currentCategory && product.id !== currentProductId
            )
            .slice(0, 3);
    };


    const relatedProducts = getRelatedProducts(products, parseInt(id), productDetails?.category);


    return (
        console.log(relatedProducts,'relatedProducts'),
        <>
            <section className='panelex__product_details p-0'>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-tab-12">
                            <div className="product_image">
                                <img src={productDetails?.image} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 pe-0 col-tab-12">
                            <div className="product_descriptions">
                                <h6>{productDetails?.description}</h6>
                                <h1>{productDetails?.title}</h1>
                                <p>Product Specifications</p>
                                <table className='product_table'>
                                    <tbody>
                                        <tr>
                                            <td>Product Category <span>{productDetails?.category}</span></td>
                                            <td>Design Number <span>{productDetails?.design_number}</span></td>
                                        </tr>
                                        <tr>
                                            <td>Finish Name <span>{productDetails?.finish_name}</span></td>
                                            <td>Finish Code <span>{productDetails?.finish_code}</span></td>
                                        </tr>
                                        <tr>
                                            <td>Tickness (MM) <span>{productDetails?.tikness}</span></td>
                                            <td>Dimension (MM) <span>{productDetails?.dimension_mm}</span></td>
                                        </tr>
                                        <tr>
                                            <td>Dimension (FT) <span>{productDetails?.dimension_ft}</span></td>
                                            {/* <td>PF NPF <span>{productDetails?.pf_npf}</span></td> */}
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="download">
                                   <a href="/assets/panelex/PANALEX_BROCHURE.pdf" download><div className="btn-download"> Download the catalog </div></a>
                                    <Link to='/panelex/contact'><div className="btn-download outline"> Request information </div></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {
                relatedProducts?.length > 0 ?
                    <section className="related__products product__lists">
                        <div className="container">
                            <h2>Related Products</h2>
                            <div className="row">
                                {
                                    relatedProducts?.map((ele, i) => {
                                        return (
                                            <div className="col-md-4" >
                                                <Link to={`/panelex/product-details/${ele?.id}`}>
                                                    <div className="productGrid">
                                                        <img src={ele?.image} alt="" />
                                                        <h4>{ele.title}</h4>
                                                        <p>{ele.description}</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </section> : ''
            }

        </>
    )
}
