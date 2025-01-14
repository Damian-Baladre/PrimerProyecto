import { useState, useEffect } from 'react';
import { HiBars3, HiBarsArrowUp } from 'react-icons/hi2';
import { Link } from 'react-router-dom'
//import  axios from 'axios';

export function Categories (){


    const [categories, setCategories] = useState([]);
    const [isOpen, setIsOpen] = useState(true);
    
//const URL_TRANSLATE = "https://api.mymemory.translated.net/get";
//   const [categoriesTanslate, setCategoriesTranslate] = useState([null]);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const response = await fetch('http://www.themealdb.com/api/json/v1/1/categories.php');
                const data = await response.json();

                setCategories(data.categories);
            }catch (error) {console.log(error); }
        }
        fetchData();
    }, []);

    useEffect(() => {
        return () => {
            setIsOpen(false)
        };
    }, []);
//    useEffect(() => {
//      const translateCategories = () => {
//          categories.map((category,_) =>{
//              translateCategories(category.strCategory);
//          });
//      }
//      const translateOneCategory = async (text) => {
//          try{
//              const response = await axios.get(URL_TRANSLATE, {
//                  params:{
//                      q: text,
//                      langpair: "en|es"
//                  }
//              });
//
//              const newData = [...categoriesTanslate + response.data.responseData.translatedText]
//              setCategoriesTranslate(newData);
//      } catch (error) {console.log(error); }
//   }
//
//   if(categories) {translateCategories();}

//, [categories]);

    return (
        <>
                <label className="toggle-menu" onClick={toggleMenu}>
                {!isOpen ? <HiBars3 size={40} /> : <HiBarsArrowUp size={40} />}
                </label>
            {isOpen && (
                <section className={`list-chip ${isOpen ? 'open' : ''}`}>
                  <ul className="chip">
                    {categories.map((item, index) => (                    
                              <li className='item-list'>
                                <Link style={{ textDecoration: 'none', color: 'inherit'}} to={`/category/${item.strCategory}`}>
                                {item.strCategory}
                                </Link>
                            </li>
                    ))}
                    </ul>
                </section>
            )}
        </>
    );
};


