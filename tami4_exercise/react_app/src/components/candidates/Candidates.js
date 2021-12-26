import React, { useState, useEffect } from 'react'
import { Table, Button, Container ,Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Candidates = () => {
    const [candidatesArr, setCandidatesArr] = useState([]);
    const token = sessionStorage.getItem('token');

    const getAllCandidates = () => {
        let config = {
            method: 'get',
            url: 'http://localhost:8080/api/candidates',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        axios(config)
            .then(function (response) {
                setCandidatesArr(response.data.candidates);
            })
            .catch(function (error) {
                console.log(error);
                alert("error in getting candidates")
            });
    }

    useEffect(() => {
        if (token)
            getAllCandidates();
    }, [token])


    return (
        <>
            <Alert variant="primary">
                Candidates
            </Alert>
            <Container >
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <td>first Name</td>
                            <td>last Name</td>
                            <td>email</td>
                            <td>job title</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            candidatesArr.map((item, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{item.first_name}</td>
                                        <td>{item.last_name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.job_title}</td>
                                        <td>
                                            <Link to={{ pathname: '/candidates/profile', state: { userInfo: item } }} >
                                                <Button variant="outline-secondary">more info</Button>{' '}
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default Candidates
