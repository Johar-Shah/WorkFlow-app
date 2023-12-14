// import React from 'react'
// import ProjectLayout from './layout'
// import allProjects from '@/Components/Projects/allProject'
// const page = () => {
//     return (
//         <>
//             <allProjects />
//             <ProjectLayout />
//         </>
//     )
// }

// export default page
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
    PlusSquareFilled,
    DownOutlined,
} from '@ant-design/icons';
import { Space, Button, Card, Typography, Col, Row, Dropdown, message, } from 'antd';

const { Title, Paragraph, Text } = Typography;
const ProjectLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSider = () => {
        setCollapsed(!collapsed);
    };
    const items = [
        {
            label: 'All Projects',
            key: '1',
        },
        {
            label: 'In Progress',
            key: '1',
        },
        {
            label: 'Completed',
            key: '3',
        },

    ];
    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };
    const menuProps = {
        items,
        onClick: handleMenuClick,
    };
    return (
        <>
            <div style={{ margin: '18px 16px', padding: '0px 10px', minHeight: 280 }}>
                <h1 className='ml-2 uppercase text-3xl'>workflow Management</h1>
                <div className='bg-white flex flex-row justify-between items-center py-2 px-5'>
                    <Title level={3}>All Projects</Title>
                    {/* <div><Button> All Project</Button></div> */}
                    <Dropdown menu={menuProps}>
                        <Button>
                            <Space>
                                All Project
                                <DownOutlined />
                            </Space>
                        </Button>
                    </Dropdown>
                </div>
                <div className='my-5'>
                    <Row gutter={16}>
                        <Col span={6}>
                            <Card title="Project 1" headerFontSize={22} bordered={false} >
                                <div className='flex flex-row justify-around items-center p-0'>
                                    <Text className='text-xl'>Total Usecase</Text>
                                    <Text>20</Text>
                                </div>
                                <div className='flex flex-row justify-around items-center my-4'>
                                    <h4>Total Resources</h4>
                                    <p>20</p>
                                </div>
                                <div className='flex flex-row justify-around items-center'>
                                    <Button className='bg-green-300'>Completed</Button>
                                    <Text></Text>
                                </div>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card title="Project 2" headerFontSize={22} bordered={false} >
                                <div className='flex flex-row justify-around items-center'>
                                    <Text className='text-xl'>Total Usecase</Text>
                                    <Text>20</Text>
                                </div>
                                <div className='flex flex-row justify-around items-center my-4'>
                                    <Text>Total Resources</Text>
                                    <Text>20</Text>
                                </div>
                                <div className='flex flex-row justify-around items-center'>
                                    <Button className='bg-orange-300'>In Progress</Button>
                                    <Text></Text>
                                </div>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card title="Project 3" headerFontSize={22} bordered={false} >
                                <div className='flex flex-row justify-around items-center'>
                                    <Text className='text-xl'>Total Usecase</Text>
                                    <Text>20</Text>
                                </div>
                                <div className='flex flex-row justify-around items-center my-4'>
                                    <Text>Total Resources</Text>
                                    <Text>20</Text>
                                </div>
                                <div className='flex flex-row justify-around items-center'>
                                    <Button className='bg-green-300'>Completed</Button>
                                    <Text></Text>
                                </div>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card title="Project 4" headerFontSize={22} bordered={false} >
                                <div className='flex flex-row justify-around items-center'>
                                    <Text className='text-xl'>Total Usecase</Text>
                                    <Text>20</Text>
                                </div>
                                <div className='flex flex-row justify-around items-center my-4'>
                                    <Text>Total Resources</Text>
                                    <Text>20</Text>
                                </div>
                                <div className='flex flex-row justify-around items-center'>
                                    <Button className='bg-orange-300'>In Progress</Button>
                                    <Text></Text>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <Card className='my-5 p-14'>
                                <Link href='/main/projects/addNewProject' className="flex flex-row justify-around items-center bg-gray-200 p-2 w-50">
                                    <PlusSquareFilled style={{ fontSize: '24px' }} /> <Title level={4}>Project</Title>
                                </Link>
                            </Card>
                        </Col>
                    </Row>
                </div>
                {/* <allProjects /> */}
                {/* <projectLayout /> */}
            </div>
        </>
    );
};

export default ProjectLayout;
