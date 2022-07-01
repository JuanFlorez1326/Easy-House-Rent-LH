import { useEffect, useState } from "react";
import { db } from "./firebase";

export const UseChat = () => {


    const [error, setError] = useState(null)
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(
        () => {
            const unsubscribe = db.collection('messages').orderBy('timestamp').onSnapshot(
                snapshot => {
                    setMessages (snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
                    setLoading(false)
                },
                err => {
                    setError(err)
                }
            )
            return () => {
                unsubscribe()
            }
        },
        [setMessages]
    )

    return { error, loading, messages }
}
