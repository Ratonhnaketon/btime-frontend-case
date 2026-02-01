import Spacer from '@/components/Spacer';
import * as SC from './styled';
import { Typography } from '@/components/Typography';

type Props = {
  title: string;
  subtitle?: string;
};

/**
 * Modal header sub component
 */
export function ModalHeader(props: Props) {
  return (
    <div>
      <SC.TitleContainer>
        <Typography.Headline8 color="grey">
          {props.title}
        </Typography.Headline8>

        <Spacer y="xs4" />

        {props.subtitle && (
          <>
            <Typography.Body4 color="grey">
              {props.subtitle}
            </Typography.Body4>

            <Spacer y="xs2" />
          </>
        )}
      </SC.TitleContainer>
    </div>
  );
}
