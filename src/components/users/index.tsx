import React, {useEffect, useState} from "react";
import {Button, Flex, Table} from "antd";
import type {TableColumnsType, TableProps} from "antd";
import {GrFormNextLink, GrFormPreviousLink} from "react-icons/gr";
import {PostDataType} from "../../models/api_models";
import {useUserStore} from "../../store/useUsersStore";
import {UserStoreType} from "../../models/store_models/store.dt";

type TableRowSelection<T extends object = object> = TableProps<T>["rowSelection"];



const columns: TableColumnsType<UserStoreType> = [
    {title: "Id", dataIndex: "id"},
    {title: "First name", dataIndex: "first_name"},
    {title: "Last name", dataIndex: "last_name"},
    {title: "Gender", dataIndex: "gender"},
    {title: "Action", dataIndex: "action"},
];


export const Users: React.FC = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [loading, setLoading] = useState(true);
    const {users} = useUserStore()


    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection: TableRowSelection<UserStoreType> = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    useEffect(() => {
        setTimeout(()=>{
            setLoading(false);
        }, 300)
    }, []);

    return (
        <Flex gap="middle" vertical className={"users-container"}>
            <div className="users-container__header">
                <Button type="primary" htmlType="submit" className="users-container__btn">Qo'shish</Button>
            </div>
            <Table<UserStoreType>
                rowSelection={rowSelection}
                columns={columns}
                dataSource={users}
                loading={loading}
                pagination={{
                    position: ["bottomCenter"],
                    pageSize: 10,
                    itemRender: (page, type, originalElement) => {
                        if (type === "prev") {
                            return (
                                <span className="pagination-btn">
                                  <GrFormPreviousLink style={{fontSize: 16, marginRight: 5}}/> Oldingi
                                </span>
                            );
                        }
                        if (type === "next") {
                            return (
                                <span className="pagination-btn">
                                  Keyingi <GrFormNextLink  style={{fontSize: 16, marginLeft: 5}}/>
                                </span>
                            );
                        }
                        return originalElement;
                    },
                }}
                className={"users-container__table"}
            />
        </Flex>
    );
};


