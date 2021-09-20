import React, {useReducer} from 'react';
import faker from 'faker';
import {FixedSizeList} from 'react-window'

interface IItem {
    name: string;
    email: string;
    avatar: string;
}

interface IListProps {
    renderItem: (value: any) => React.ReactElement,
    data: IItem[],
    renderEmpty: React.ReactElement
}

const List = ({renderItem, data, renderEmpty}: IListProps) => {
    return !data.length ? (renderEmpty) : (<ul style={{listStyleType: 'none'}}>
        {data.map((item, index) => (<li key={index}>{renderItem(item)}</li>))}
    </ul>)
}

const ReactWindowPage = () => {
    const [renderAll, setRenderAll] = useReducer(value => !value, false)
    const bigList = [...Array(5000)].map(() => ({
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: faker.internet.avatar(),
    }))

    const renderItem = (item: IItem) => (<div style={{display: "flex"}}>
        <img src={item.avatar} alt={item.name} width={50}/>
        <p>{item.name} - {item.email}</p>
    </div>)

    const renderRow = ({index, style}: { index: number, style: {} }) => (<div style={{...{style}, display: "flex"}}>
        <img src={bigList[index].avatar} alt={bigList[index].name} width={50}/>
        <p>{bigList[index].name} - {bigList[index].email}</p>
    </div>)

    return (
        <div>
            <h4>React Window</h4>
            <button onClick={setRenderAll}>{renderAll ? 'render on scroll' : 'render all'} value</button>
            {renderAll && <List renderItem={renderItem} data={bigList} renderEmpty={<h3>List is empty</h3>}/>}
            {!renderAll &&
            <FixedSizeList height={window.innerHeight} width={window.innerWidth} itemCount={bigList.length}
                           itemSize={35}>
                {renderRow}
            </FixedSizeList>}
        </div>
    );
};

export default ReactWindowPage;