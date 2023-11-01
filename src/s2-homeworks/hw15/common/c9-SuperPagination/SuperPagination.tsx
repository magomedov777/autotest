import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import { Pagination } from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    // const lastPage = 10 // пишет студент // вычислить количество страниц
    const lastPage = Math.ceil(totalCount / itemsCountForPage) // пишет студент // вычислить количество страниц

    const onChangeCallback = (event: any, page: number) => {
        // пишет студент
        onChange(page, itemsCountForPage)
    }

    const onChangeSelect = (event: any) => {
        // пишет студент
        onChange(page, +event)
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    button: {
                        borderRadius: '2px',
                        marginRight: '20px',
                        marginLeft: '0px',
                        width: '24px',
                        height: '24px',
                        padding: '4px 8px',
                        fontSize: '14px',
                        fontWeight: 400,
                        backgroundColor: 'transparent',
                        '&:hover': {
                            backgroundColor: '#0066CC',
                            color: '#fff',
                        },
                        '&.Mui-selected': {
                            backgroundColor: '#0066CC',
                            color: '#fff',
                        },
                    },
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    { id: 4, value: 4 },
                    { id: 7, value: 7 },
                    { id: 10, value: 10 },
                ]}
                onChangeOption={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination