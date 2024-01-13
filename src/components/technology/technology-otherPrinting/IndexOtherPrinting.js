import React from 'react'
import Introduce from './Introduce'
import Solution from './Solution'
import Content from './Content'
import Banner from '@/components/common/Banner'
import TitlePage_Tech from '@/components/common/TitlePage_Tech'
import HandleChangeSlug from '@/components/common/HandleChangeSlug'

function IndexOtherPrinting({ data,slugPage,lang,titlePage,listSlug }) {
    const dataBanner = data?.data?.page?.translation?.technology_otherPrinting
    const dataPrint = data?.data?.page?.translation?.technology_otherPrinting?.content
    return (
        <>
            <Banner
                image={dataBanner?.banner?.background?.sourceUrl}
                altText={dataBanner?.banner?.background?.altText}
                title={dataBanner?.banner?.title}
                positionAndBox={'md:right-[8.47rem] md:bottom-[8rem] max-md:left-[4.27rem] bottom-[3.73rem] md:w-[26rem] w-[75rem]'}
                classTitle={'md:text-[3.4375rem] text-[8.53333rem]'}
                background={'bg-[#f5f5f5]'}
            />
            <main className='containerWrapper'>
                <HandleChangeSlug listSlug={listSlug} />
                <TitlePage_Tech check={4} lang={lang} slugPage={slugPage} titlePage={titlePage} />
                <Introduce dataIntro={dataPrint?.introduce} />
                <Solution dataSolution={dataPrint?.solutions} />
                <Content dataContent={dataPrint?.mainContent} />
            </main>
            
        </>
    )
}

export default IndexOtherPrinting