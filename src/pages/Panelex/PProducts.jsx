import Aos from 'aos';
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

export default function PProducts() {
    const [showFilter, setShowFilter] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedEffect, setSelectedEffect] = useState(null);


    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const SHEET_ID = '15vpUs1YPXpmQ5togjWU1DLp6n6wuaMWeQyOBSvQUk8o';
    const API_KEY = 'AIzaSyDtwPXcPaZ2gJCYCP8Ci0UAooHF-fgMRtA';
    const SHEET_NAME = 'panelex';
    const RANGE = 'A1:L';

    const filterRef = useRef(null);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setShowFilter(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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
    }, []);

    const filteredProducts = products.filter((product) => {
        const matchesSearch = (product.title + product.desc).toLowerCase().includes(searchTerm.toLowerCase());
        const matchesEffect = selectedEffect ? product.type === selectedEffect : true;
        return matchesSearch && matchesEffect;
    });

    const effectBannerContent = {
        Elite: {
            title: "Elite",
            description: "Wood finishes that weave warmth and simplicity into every room, offering a natural charm that enhances the heart of your home.",
            image: "/assets/panelex/products/elite.jpg"
        },
        Earth: {
            title: "Earth",
            description: "Marble surfaces that bring timeless beauty, where elegance meets nature’s finest, transforming any space into a sanctuary of luxury.",
            image: "/assets/panelex/products/earth.png"
        },
        Lino: {
            title: "Lino",
            description: "Soft, inviting fabrics that blend comfort with style, adding a touch of warmth and elegance to every corner of your space.",
            image: "/assets/panelex/products/lino.png"
        },
        HD: {
            title: "HD",
            description: "Bold, solid colors that speak with quiet strength, creating a clean, modern canvas for every room to shine.",
            image: "/assets/panelex/products/hd.png"
        },
        Hues: {
            title: "Oxford Hues",
            description: "Gentle pastel shades that wrap your space in serenity, creating an atmosphere of calm and quiet beauty.",
            image: "/assets/panelex/products/hues.png"
        },
        All: {
            title: "Pre-laminated chipboard",
            description: "Our collection of prelaminated boards are a result of precision and innovation—engineered for lasting durability and effortless styling across spaces.",
            image: "/assets/panelex/products/p1.jpg"
        }
    };

    const filterOptions = [
        { name: "Elite", img: "/assets/panelex/categories/filter1.png" },
        { name: "Earth", img: "/assets/panelex/categories/filter2.png" },
        { name: "Lino", img: "/assets/panelex/categories/filter3.png" },
        { name: "HD", img: "/assets/panelex/categories/filter4.png" },
        { name: "Oxford Hues", img: "/assets/panelex/categories/filter6.png" },
        { name: "All", img: "/assets/panelex/categories/filter5.png" },
    ];

    const bannerData = effectBannerContent[selectedEffect] || effectBannerContent["All"];

    const handleEffectClick = (effect) => {
        // if (effect === "Oxford Hues") {
        //     setSelectedEffect("Hues")
        // } else {
        //     setSelectedEffect(effect === "All" ? null : effect);
        // }
        setSelectedEffect(effect === "All" ? null : effect);

        setShowFilter(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


        useEffect(function () {
          Aos.init({ duration: 2000 });
        }, []);
    return (
        console.log(filteredProducts, 'filteredProducts'),
        <>
            <section className="panelex__products pt-0">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-6 px-0">
                            <div className="contents">
                                <h1 data-aos="fade-up">{bannerData.title}</h1>
                                <p data-aos="fade-up">{bannerData.description}</p>
                            </div>
                        </div>
                        <div className="col-md-6 px-0">
                            <img src={bannerData.image} className='w-100' alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="product__lists">
                <div className="container">
                    <div className="filterBox" ref={filterRef}>
                        <div className="filter" onClick={() => setShowFilter(!showFilter)}>
                            Filter
                            <img src="/assets/panelex/filter.svg" alt="" />
                        </div>
                        {
                            <div className={`filter__data ${showFilter ? "show" : ""} `}>
                                <p>Search by name</p>
                                <input type="text" placeholder='PP1101' onChange={(e) => setSearchTerm(e.target.value)} />
                                <p>Search by effect</p>
                                <div className="filters">
                                    {filterOptions.map((option, index) => (
                                        <div
                                            key={index}
                                            className={`grid ${selectedEffect === option.name || (option.name === "All" && selectedEffect === null) ? 'active' : ''}`}
                                            onClick={() => handleEffectClick(option.name)}
                                        >
                                            <img src={option.img} alt={option.name} />
                                            {option.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }

                    </div>
                    <div className="row">
                        {filteredProducts.length === 0 ? (
                            <p className="text-center w-100">Sorry, no matching products found.</p>
                        ) : (
                            filteredProducts.map((ele, i) => (
                                <div className="col-md-4" key={i}>
                                    <Link to={`/panelex/product-details/${ele?.id}`}>
                                    <div className="productGrid">
                                       <img src={ele?.image} alt="" />
                                        <h4>{ele.title}</h4>
                                        <p>{ele.description}</p>
                                    </div>
                                    </Link>
                                </div>
                            ))
                        )}

                    </div>
                </div>
            </section>
        </>
    )
}
