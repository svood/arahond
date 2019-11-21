import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import { Container, Row, Col } from "shards-react";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function joobersList() {
    const result = useSelector(state => state.data)

    return (
        <>
            <Container >
                <div className="JooberListTitle">Последние добавленные работники </div>
            </Container>
            <Container className='joobersList'>

                <Row>
                    <Table className="jobbersTable">
                        <Thead>
                            <Tr>

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
                                        <Td>{item.name}</Td>
                                        <Td >{item.last_name}</Td>
                                        <Td >{item.patronymics}</Td>
                                        <Td >{new Date(item.birthday).getMonth()}</Td>
                                        <Td ><img style={{ width: '100px' }} src={(item.photo) ? item.photo.url : "../static/male-user-icon-vector-8865469.jpg"} /></Td>
                                        <Td>
                                            <Link href={`/jooberinfo?id=${item.objectId}`}>
                                                <a className="listCommentIcon mainColorText">  <FontAwesomeIcon icon={faCommentDots} /></a>
                                            </Link>
                                        </Td>
                                    </Tr>
                                )) : null
                            }
                        </Tbody>
                    </Table>
                </Row>

            </Container>
        </>
    )

}
