import { useEffect } from "react";
import { useRouter } from "next/router";

export default function useGuard() {
  const router = useRouter()
  useEffect(() => {
    if (!localStorage.token) {
      router.push('/login', undefined, { shallow: true })
    }
  }, [])
}