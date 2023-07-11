import Item from './Item';
const arr = [1,2,10]
/* 在JSX寫javascript要加上{}*/
const List = () => {
    return <div className="list">  
        <Item/>
        <Item/>
        <Item/>
    </div>
}

export default List

