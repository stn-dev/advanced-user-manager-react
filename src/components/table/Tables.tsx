import style from './table.module.css'
import Input from '../input/Input'
import Button from '../button/Button'
import { useEffect, useState } from 'react'

type Props = {}

type UserType = {
    id: string
    name: string,
    age: string,
    gender: string
}

export const Tables = () => {

    const [user, setUser] = useState<Array<UserType>>([])
    const [duplicateUser, setDuplicateUser] = useState<Array<UserType>>([])
    const [filter, setFilter] = useState('')
    const [filterLength, setFilterLength] = useState<number | string>()
    const [editable, setEditable] = useState(false)
    const [editId, setEditId] = useState<string | null>(null)

    // useEffect(() => {

    //     if (!editId) return

    //     let selectedItems = document.querySelectorAll(`#td${editId}`)

    //     console.log(selectedItems[0])
    //     // selectedItems.

    // }, [editId])

    const deleteUser = (id: string) => {
        setUser(user.filter((el) => el.id !== id))
    }

    const changeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value as string)
        console.log(filter)
    }

    const filterUser = () => {
        if (filter !== "") {
            setUser(user.filter((el) => el.name.includes(filter)))
            setFilterLength(user.filter((el) => el.name.includes(filter)).length)
        } else {
            setUser(duplicateUser)
            setFilterLength('no search')
        }
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formdata = new FormData(e.currentTarget)

        const name = formdata.get('name') as string
        const gender = formdata.get('gender') as string
        const age = formdata.get('age') as string

        const data = {
            id: Date.now().toString(),
            name, gender, age
        }

        setUser([...user, data])

        setDuplicateUser([...duplicateUser, data])

        console.log(duplicateUser)
        e.currentTarget.reset()
    }

    useEffect(() => {
        filterUser()
    }, [filter])




    return (
        <div className={style.container} >

            <form onSubmit={handleSubmit} >

                <Input
                    type='text'
                    name='name'
                    placeholder='enter your name ...'
                />
                <Input
                    type='text'
                    name='gender'
                    placeholder='your gender'
                />
                <Input
                    type='number'
                    name='age'
                    placeholder='your age'
                />
                <Button
                    content='Add'
                    styleClass='edit'
                />

            </form>

            <div className={style.tableContainer} >

                <Input
                    type='text'
                    name='search'
                    placeholder='filter by name'
                    onChange={changeFilter}
                />

                <p>Search result : {filterLength}</p>

                <table>

                    <thead>
                        <tr>
                            <th>name</th>
                            <th>gender</th>
                            <th>age</th>
                            <th>action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            user.map((pers) => (
                                <tr
                                    key={pers.id}
                                >
                                    <td
                                        autoFocus
                                        contentEditable={editId == pers.id}
                                        style={{ border: `${editId == pers.id ? "2px solid black" : "1px solid blue"}` }}
                                    >
                                        {pers.name}
                                    </td>
                                    <td
                                        contentEditable={editId == pers.id}
                                        style={{ border: `${editId == pers.id ? "2px solid black" : "1px solid blue"}` }}
                                    >
                                        {pers.gender}
                                    </td>
                                    <td
                                        contentEditable={editId == pers.id}
                                        style={{ border: `${editId == pers.id ? "2px solid black" : "1px solid blue"}` }}
                                    >
                                        {pers.age}
                                    </td>
                                    <td>
                                        <Button
                                            content={'Edit'}
                                            styleClass='edit'
                                            onClick={() => {
                                                setEditId(pers.id)
                                                setEditable(!editable)
                                            }}
                                        />
                                        <Button
                                            content='Delete'
                                            styleClass='delete'
                                            onClick={() => deleteUser(pers.id)}
                                        />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>

            {/* <Input
                type='text'
                name='test'
                placeholder='enter your name ...'
            />
            <Button
                content='edit'
                styleClass='delete'
            /> */}
        </div>
    )
}