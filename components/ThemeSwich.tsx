'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()


  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Button rounded={'full'} className=' ' variant={'link'}><MoonIcon className='scale-[1.8]'/></Button>
  }
  const SwitchTheme = () => {
    if(theme === 'dark'){
      setTheme('light')
    }
    else{
      setTheme('dark')
    }
  }

  return (
    <Button rounded={'full'} className=' ' variant={'link'} onClick={SwitchTheme} >
      {theme === 'dark' ? <MoonIcon className='scale-[1.8]' />:<SunIcon className='scale-[1.8]'/>}
    </Button>
  )
}

export default ThemeSwitch