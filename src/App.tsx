import React, { useEffect, useState } from 'react';
import './App.css';
import { Layout } from './components/layout/Layout';
import { ProductsPage } from './components/products/ProductsPage';
import { Product } from './components/products/types';
import { ProductResponse } from './types';
import jsonData from "./data/data.json";
import { Overlay } from './components/overlay/Overlay';
import { Carousal } from './components/carousal/Carousal';

function App() {
  const [products, setProducts] = useState<Array<Product>>([]);
  const [ isDialogVisible, setIsDialogVisible ] = useState(false);
  const [ selectedItem, setSelectedItem ] = useState<Product | undefined>();
  useEffect(() => {
    // fetchData().then(response => {
    //   const {groups} = response;
    //   setProducts(groups);
    // });
  const {groups} = jsonData as ProductResponse
    setProducts(groups);
  },[]);

  const showDailog = () => {
    setIsDialogVisible(!isDialogVisible);
  }

  const hideDailog = () => {
    setIsDialogVisible(!isDialogVisible);
  }

  // const fetchData = async (): Promise<ProductResponse> => {
  //   return await fetch('https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json').then(res =>  res.json());
  // }

  const selechedItemHandler = (_: React.MouseEvent<HTMLDivElement, MouseEvent>, item: Product) => {
    setSelectedItem(item);
    showDailog();
  } 
  return  (<div className='app'>
    { products && (<Layout>
      <ProductsPage items={products} selectedProduct={selechedItemHandler}/>
      </Layout>) 
      }
    <Overlay isVisible={isDialogVisible} onClose={hideDailog}><Carousal items={products} selectedItem={selectedItem}/></Overlay>
  </div>
  ); 
}

export default App;