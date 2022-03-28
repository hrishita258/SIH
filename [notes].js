import next from "next"
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import useStorage from '../useSessionStorage';
import { useRouter } from 'next/router'


export default function Notes() {
    // const { state } = useLocation();
    const router = useRouter()
    const { id } = router.query
    const { getItem, setItem, removeItem } = useStorage();
    const note = JSON.parse(getItem("hh")).find(h => h.id == id)
    console.log(note, "kuchb")
    useEffect(() => {
        // console.log(getItem("hh"))
    }, []);
    console.log(id)
    return (
        <>

            <h1>{note.title}</h1>
            <p>{note.desc}</p>
            <h2>
                <Link href="/main" state={{ title: 'hh' }}>
                    <a>Back to home</a>
                </Link>

            </h2>
        </>
    )
}