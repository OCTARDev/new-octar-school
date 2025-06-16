import React from 'react'
import Card from '../Card'
import { useTranslations } from 'next-intl'

export default function Aside({otherBlogs}) {
  const t = useTranslations("blog.single.aside")
  return (
    <aside className='col-span-1 flex flex-col gap-3 text-center'>
        <h2 className='text-2xl font-bold text-primaryA1'>{t("header")}</h2>
        <hr/>
        {otherBlogs?.map((c)=>{
            return(
            <Card c={c} key={c.id}/>
            )
        })}
    </aside>
  )
}
