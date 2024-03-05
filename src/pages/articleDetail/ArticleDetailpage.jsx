import React from 'react'
import BreadCrumbs from "../../components/BreadCrumbs";
import MainLayout from "../../components/MainLayout";

const BreadCrumbsData = [
  {name: "Home", link: '/'},
  {name: "blog", link: '/blog'},
  {name: "Article title", link: '/blog/1'},
]

const articleDetailpage = () => {
  return (
    <MainLayout>
        <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 ">
          <article className="flex-1">
              <BreadCrumbs />
          </article>
        </section>
    </MainLayout>
  )
}

export default articleDetailpage
