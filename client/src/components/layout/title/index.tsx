import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button, Typography } from "@pankod/refine-mui";
import { logo } from '../../../assets'


export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={logo} alt="Stringle" width="35px" />
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px'}}>
            <img src={logo} alt="yariga Logo" width="35px" /> 
            <Typography
              sx={{ 
                fontSize: '22px', 
                fontWeight: '700',
                textDecoration: 'none',
                textTransform: 'capitalize',
                color: '#1e1e1e'
                }}>
              Stringle
            </Typography>
          </div>
        )}
      </Link>
    </Button>
  );
};
