import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Avatar, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    centerAvatar: {
        display: 'flex',
        justifyContent: 'center'
    }
});
export default function UsersList () {
    const classes = useStyles();
    const [users, setUsers] = useState<any>([]);

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(res => {
                setUsers(res.data.data);
            })
    }, []);

    return (
        <>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell align="center">Avatar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((row: any) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row" align="center">
                                    {row.id}
                                </TableCell>
                                <TableCell>{row.first_name}</TableCell>
                                <TableCell>{row.last_name}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell align="center" className={classes.centerAvatar}>
                                    <Avatar alt="Remy Sharp" src={row.avatar}/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
