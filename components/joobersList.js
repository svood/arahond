import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import { Container, Row, Col } from "shards-react";


export default function joobersList() {
    const result = useSelector(state => state.data)

    return (
        <Container className='joobersList'>
            <Row>
                <h1>
                    Joobers List
                </h1>
            </Row>
            <Row>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>ИНН</Th>
                            <Th>Имя</Th>
                            <Th>Фамилия</Th>
                            <Th>Отчество</Th>
                            <Th>Дата Рождения</Th>
                            <Th>Фото</Th>
                            <Th>Кооментарии</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            (result) ? result.map((item, i) => (
                                <Tr key={i}>

                                    <Td >{item.inn}</Td>
                                    <Td>{item.name}</Td>
                                    <Td >{item.last_name}</Td>
                                    <Td >{item.patronymics}</Td>
                                    <Td >{item.birthday.iso}</Td>
                                    <Td ><img style={{ width: '100px' }} src={item.photo.url} /></Td>
                                    <Td>
                                        <Link href={`/jooberinfo?id=${item.objectId}`}>
                                            <a>Коментарии</a>
                                        </Link>
                                    </Td>
                                </Tr>
                            )) : null
                        }
                    </Tbody>
                </Table>
            </Row>

        </Container>
    )

}
