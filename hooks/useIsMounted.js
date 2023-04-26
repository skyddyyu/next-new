export default function useIsMounted() {
    const [isMounted, setIsMounted] = useState()

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return isMounted
}