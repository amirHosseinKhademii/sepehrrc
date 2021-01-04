import { DesignLayout } from 'components/admin/layouts';
import {ProductsCard} from '../../../components/admin/lab/products-card'

const productCover = '/assets/images/product.png'

const productsData = [
    {
        id:0,
        name:'کیت کلاچ میتسوبیشی لنسر',
        cover:productCover,
        price:'3/000/000',
        discount:'500000'
    },
    {
        id:1,
        name:'کیت کلاچ میتسوبیشی لنسر',
        cover:productCover,
        price:'3/000/000',
        discount:'500000'
    },
    {
        id:2,
        name:'کیت کلاچ میتسوبیشی لنسر',
        cover:productCover,
        price:'3/000/000',
        discount:'500000'
    },
    {
        id:3,
        name:'کیت کلاچ میتسوبیشی لنسر',
        cover:productCover,
        price:'3/000/000',
        discount:'500000'
    },
]

const Products = () => {

    return(
        <DesignLayout>
            <ProductsCard data={productsData} title='جدید ترین محصولات ما' columnCount={4} />
        </DesignLayout>
    )
}


export default Products