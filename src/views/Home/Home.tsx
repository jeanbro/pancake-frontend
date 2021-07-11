import styled from 'styled-components'
import React from 'react'
import { Heading, Text, BaseLayout } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPRCard from 'views/Home/components/EarnAPRCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import PredictionPromotionCard from 'views/Home/components/PredictionPromotionCard'
import LotteryPromotionCard from 'views/Home/components/LotteryPromotionCard'
import LotteryBanner from 'views/Home/components/LotteryBanner'
import useFetchLotteryForPromos from 'views/Home/hooks/useFetchLotteryForPromos'

const Hero = styled.div`
  align-items: center;
  // background-image: url('/images/pan-bg-mobile.svg');
  // background-repeat: no-repeat;
  // background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    // background-image: url('/images/astro2.png'), url('/images/astro1.png');
    // background-position: left center, right center;
    // background-size: 130px;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 4;
    }
  }
`

const Home: React.FC = () => {
  const { t } = useTranslation()
  const { currentLotteryPrize } = useFetchLotteryForPromos()

  return (
    <>
      <Page>
        <Hero>
          <Heading as="h1" scale="xl" mb="24px" color="#102648">
            {t('PancakeSwap')}
          </Heading>
          <Text color="#102648">{t('The #1 AMM and yield farm on Binance Smart Chain.')}</Text>
        </Hero>
        <div>
          <CTACards>
            <EarnAPRCard />
            <EarnAssetCard />
            <LotteryPromotionCard currentLotteryPrize={currentLotteryPrize} />
          </CTACards>
          <Cards>
            <FarmStakingCard />
            <PredictionPromotionCard />
          </Cards>
          <LotteryBanner currentLotteryPrize={currentLotteryPrize} />

          <Cards>
            <CakeStats />
            <TotalValueLockedCard />
          </Cards>
        </div>
      </Page>
    </>
  )
}

export default Home
