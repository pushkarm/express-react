import { useCallback, useState } from "react";
import { User } from "./User.model";

export const useUserList = () => {
    const [search, setSearch] = useState("");
    const [searchAll, setSearchAll] = useState("");
    const [users, setUsers] = useState<User[]>([]);    

    const handleChange = useCallback((event: any) => {
        console.log(event.target.value);
        setSearch(event.target.value);
        setSearchAll("");
        searchUsers(event.target.value);
    }, []);

    const handleChangeAll = useCallback(async (event: any) => {
        console.log(event.target.value);
        setSearch("");
        setSearchAll(event.target.value);
        await searchUsersAll(event.target.value);
    }, []);

    const searchUsersAll = async (search: string) => {
        fetch(`http://localhost:4000/users/search?search=${search}`).then(response => {
            if (response.status == 200) {
                response.json().then(data => {
                console.log(data);
                setUsers(data)
                });
            } else {
                setUsers([])
            }
        
        }).catch(err => {
        console.log(err);
        });
    }

    const searchUsers = async (search: string) => {
        fetch(`http://localhost:4000/users/searchName?search=${search}`).then(response => {
            if (response.status == 200) {
                response.json().then(data => {
                console.log(data);
                setUsers(data)
                });
            } else {
                setUsers([])
            }
        
        }).catch(err => {
            console.log(err);
        });
    }


    return {
        search,
        searchAll,
        users,
        handleChange,
        handleChangeAll
    }
}