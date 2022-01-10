import React from 'react';
import { Chip } from 'primereact/chip';
import { Toolbar } from 'primereact/toolbar';
import { useAppSelector } from '../../app/store';
import { useGetCurrencyListQuery } from '../../service/currency.api';

const Banner = () => {
  useGetCurrencyListQuery();
  const cart = useAppSelector((state) => state.cart);
  const currency = useAppSelector((state) => state.currency);

  const balanceUSD = () => {
    return `Balance: $${cart.balance}`; //
  };

  const balanceTRY = () => {
    return `TRY Balance: ${Math.ceil(currency?.rates?.TRY * 4250)} TRY`; //
  };

  const balanceEUR = () => {
    return `EUR Balance: ${Math.ceil(currency?.rates?.EUR * 4250)} EUR`; //
  };

  const leftContents = (
    <React.Fragment>
      <Chip template={balanceUSD} />
    </React.Fragment>
  );

  const rightContents = (
    <React.Fragment>
      <Chip template={balanceTRY} />
      <Chip template={balanceEUR} style={{ marginLeft: '10px' }} />
    </React.Fragment>
  );
  return <Toolbar left={leftContents} right={rightContents} />;
};

export default Banner;
