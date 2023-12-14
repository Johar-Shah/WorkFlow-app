'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
    AccountBookFilled,
    BellFilled,
    ProjectFilled,
    IdcardFilled,
    SignalFilled,
    VideoCameraOutlined,
    RightOutlined,
    LeftOutlined,
    DownOutlined,
} from '@ant-design/icons';
import { Space, Layout, Menu, Button,  Typography, Dropdown, message, } from 'antd';

const { Title, Paragraph, Text } = Typography;
export default function ProjectForm() {
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
                        <div className='bg-white flex flex-row justify-between items-center py-2 px-5 mb-5'>
                            <Title level={3}>Add New Project</Title>
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

                        {/* Shows a Details of Project */}
                        <section className="relative ProjectFormFlexingHeroSec pt-5 pb-16">
                            <form className="ProjectFormFlex">
                                <div className="ProjectFormSectioAdj">
                                    <label className="PFDetailsList" htmlFor="Project">
                                        Project Name:
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Project name"
                                        className="inputSpaceForm"
                                    />
                                </div>

                                <div className="ProjectFormSectioAdj">
                                    <label className="PFDetailsList" htmlFor="Project">
                                        Project Manager :
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Admin name"
                                        className="inputSpaceForm"
                                    />
                                </div>

                                <div className="ProjectFormSectioAdj">
                                    <label className="PFDetailsList" htmlFor="Project">
                                        Project Description :
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Description.."
                                        className="inputSpaceForm"
                                    />
                                </div>
                                <div className="ProjectFormSectioAdj">
                                    <label className="PFDetailsList" htmlFor="Project">
                                        Add Resources :
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Please enter name"
                                        className="inputSpaceFormAddResouces"
                                    />
                                </div>

                                <div className="ProjectFormSectioAdj">
                                    <label className="PFDetailsList" htmlFor="Project">
                                        Project Department :
                                    </label>
                                    <input
                                        type="text"
                                        id=" name"
                                        placeholder=" Please describe your customer service, internal customers directly.."
                                        className="inputSpaceFormAddResouces"
                                    />
                                </div>

                                <div className="ProjectFormSectioAdj">
                                    <label className="PFDetailsList" htmlFor="Project">
                                        Project Duration :
                                    </label>
                                    <input type="date" id="name" className="inputSpaceForm" />
                                </div>
                                <div className="ProjectFormSectioAdj">
                                    <label className="PFDetailsList" htmlFor="Project">
                                        Budget <span>(optional)</span> :
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="inputSpaceForm"
                                        placeholder="...."
                                    />
                                </div>
                            </form>
                            <Button className="absolute right-5 bottom-2 bg-blue-500 text-white my-4"><Link href='/main/projects/addStage'>Next</Link></Button>
                        </section>
                    </div>

        </>
    );
}
