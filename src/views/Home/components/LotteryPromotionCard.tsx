import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon, Skeleton } from '@pancakeswap/uikit'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import { usePriceCakeBusd } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import Balance from 'components/Balance'

const StyledFarmStakingCard = styled(Card)`
  background-image: url('/images/astro2.png');
  background-repeat: no-repeat;
  background-position: 160px 95px;
  background-size: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 200px;
  box-shadow: 0px 0px 10px #95dbf5;
  background-color: #f7931a;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }

  transition: opacity 200ms;
  &:hover {
    opacity: 0.65;
  }
`

const LotteryPromotionCard: React.FC<{ currentLotteryPrize: string }> = ({ currentLotteryPrize }) => {
  const { t } = useTranslation()
  const cakePriceBusd = usePriceCakeBusd()
  const prizeInBusd = cakePriceBusd.times(currentLotteryPrize)
  const prizeTotal = getBalanceNumber(prizeInBusd)

  return (
    <StyledFarmStakingCard>
      <NavLink exact activeClassName="active" to="/lottery" id="lottery-pot-cta">
        <CardBody>
          <Heading color="contrast" scale="lg">
            {t('Lottery')} V2
          </Heading>
          {prizeInBusd.isNaN() ? (
            <>
              <Skeleton height={60} width={210} />
            </>
          ) : (
            <Balance fontSize="40px" color="#fff" bold prefix={`${t('Over')} $`} decimals={0} value={prizeTotal} />
          )}
          <Flex justifyContent="space-between">
            <Heading color="contrast" scale="lg">
              {t('in Prizes!')}
            </Heading>
            <ArrowForwardIcon mt={30} color="primary" />
          </Flex>
        </CardBody>
      </NavLink>
    </StyledFarmStakingCard>
  )
}

export default LotteryPromotionCard
