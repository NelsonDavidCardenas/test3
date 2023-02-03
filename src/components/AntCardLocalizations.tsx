import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card, List } from 'antd';

const { Meta } = Card;

const data = [
    {
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    },
];

type CardType = {
    name: string,
    image: string | undefined,
    description: string
}

const AntCardLocalizations: React.FC<CardType> = ({ name, image, description }: CardType) => (
    <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={(item) => (
            <List.Item>
                <Card title={description}> content</Card>
            </List.Item>
        )}
    />
);

export default AntCardLocalizations;
