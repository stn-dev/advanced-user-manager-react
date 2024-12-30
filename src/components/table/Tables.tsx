import style from './table.module.css'
import Input from '../input/Input'
import Button from '../button/Button'
import { useEffect, useState } from 'react'
import { setCommentRange } from 'typescript'


type UserType = {
    id: string
    name: string,
    age: string,
    gender: string,
    editing: boolean
}

type EditType = {
    id: string,
    editable: boolean,
    toEdit: boolean
}

export const Tables = () => {

    const [user, setUser] = useState<Array<UserType>>([])

    const [filter, setFilter] = useState('')
    const [filterLength, setFilterLength] = useState<number | string>()
    const [currentPage, setScurrentPage] = useState(1)

    const itemPerPage = 5;
    const lastItem = currentPage * itemPerPage;
    const indexOfFirstItem = lastItem - itemPerPage;
    const filtered = user.filter((user) => user.name.includes(filter))
    const dataFilter = filtered.slice(indexOfFirstItem, lastItem)
    const [duplicateUser, setDuplicateUser] = useState<Array<UserType>>(user.slice(indexOfFirstItem, lastItem))

    const editUser = (pers: UserType, id: string) => {

        const el = document.querySelectorAll(`#${pers.name}-${id}`)

        const persone = user.find((user) => user === pers)

        if (persone?.editing == false) {

            for (let i = 0; i <= 2; i++) {
                el[i].setAttribute("contenteditable", "true")
            }

            const toogleEdit = user.map((pers) => pers.id === id ? { ...pers, editing: true } : pers)

            setUser(toogleEdit)
            setDuplicateUser(toogleEdit)
        } else {

            for (let i = 0; i <= 2; i++) {
                el[i].removeAttribute('contenteditable')
            }

            const toogleEdit = user.map((pers) => pers.id === id ? { ...pers, editing: false } : pers)

            setUser(toogleEdit)
            setDuplicateUser(toogleEdit)
        }

    }

    const updateContent = (id: string, updatedContent: object) => {

        const updated = user.map((pers) => pers.id === id ? { ...pers, ...updatedContent } : pers)

        setUser(updated)
        setDuplicateUser(updated)

        console.log(user)
    }

    const deleteUser = (id: string) => {

        setUser(user.filter((el) => el.id !== id))

        if (currentPage < 1) setScurrentPage(1)

        if (duplicateUser.length === 1) {
            setScurrentPage((per) => per - 1)
        }

    }


    const changeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value as string)
        console.log(filter)
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formdata = new FormData(e.currentTarget)

        const name = formdata.get('name') as string
        const gender = formdata.get('gender') as string
        const age = formdata.get('age') as string

        const data = {
            id: Date.now().toString(),
            name, gender, age, editing: false
        }

        setUser([...user, data])

    }





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

                    <tbody
                        className='table-body'
                        onBlur={() => console.log("first")}
                    >
                        {
                            dataFilter.map((pers) => (
                                <tr
                                    key={pers.id}
                                >
                                    <td
                                        onBlur={(e) => updateContent(pers.id, { name: e.target.innerHTML })}
                                        id={`${pers.name}-${pers.id}`}
                                    >
                                        {pers.name}
                                    </td>
                                    <td
                                        onBlur={(e) => updateContent(pers.id, { gender: e.target.innerHTML })}
                                        id={`${pers.name}-${pers.id}`}
                                    >
                                        {pers.gender}
                                    </td>
                                    <td
                                        onBlur={(e) => updateContent(pers.id, { age: e.target.innerHTML })}
                                        id={`${pers.name}-${pers.id}`}
                                    >
                                        {pers.age}
                                    </td>
                                    <td>
                                        <Button
                                            content={pers.editing ? "save" : 'Edit'}
                                            styleClass='edit'
                                            onClick={() => editUser(pers, pers.id)}
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
            <div className={style.pagination} >
                {
                    Array.from({ length: Math.ceil(filtered.length / itemPerPage) }, (_, index) => (
                        <button
                            className={style.paginationBtn}
                            onClick={() => { setScurrentPage(index + 1) }}
                            style={{ backgroundColor: `${currentPage === index + 1 ? 'rgb(183 183 255)' : 'rgb(232, 232, 255)'}` }}
                            key={index}
                        >
                            {index + 1}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}