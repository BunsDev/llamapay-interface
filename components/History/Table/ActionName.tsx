import { CashIcon, CogIcon, InboxInIcon, PauseIcon, PlayIcon, PlusIcon, XIcon } from '@heroicons/react/solid';
import Tooltip from 'components/Tooltip';
import { useChainExplorer } from 'hooks';
import { IHistory } from 'types';

export default function ActionName({ data }: { data: IHistory }) {
  const { url: chainExplorer } = useChainExplorer();
  const link = `${chainExplorer}/tx/${data.txHash}`;
  return (
    <div className="flex justify-center">
      {data.eventType === 'StreamModified' ? (
        <Tooltip content="Stream Modified">
          <div className="rounded bg-yellow-100 p-1 text-yellow-600">
            <a href={link} target="_blank" rel="noreferrer noopener">
              <span className="sr-only">View transaction on chain explorer</span>
              <CogIcon className="h-4 w-4" />
            </a>
          </div>
        </Tooltip>
      ) : data.eventType === 'StreamCreated' ? (
        <Tooltip content="Stream Created">
          <div className="rounded bg-green-100 p-1 text-green-600">
            <a href={link} target="_blank" rel="noreferrer noopener">
              <span className="sr-only">View transaction on chain explorer</span>
              <PlusIcon className="h-4 w-4" />
            </a>
          </div>
        </Tooltip>
      ) : data.eventType === 'StreamCancelled' ? (
        <Tooltip content="Stream Cancelled">
          <div className="rounded bg-red-100 p-1 text-red-600">
            <a href={link} target="_blank" rel="noreferrer noopener">
              <span className="sr-only">View transaction on chain explorer</span>
              <XIcon className="h-4 w-4" />
            </a>
          </div>
        </Tooltip>
      ) : data.eventType === 'Withdraw' ? (
        <Tooltip content="Withdraw">
          <div className="rounded bg-green-100 p-1 text-green-600">
            <a href={link} target="_blank" rel="noreferrer noopener">
              <span className="sr-only">View transaction on chain explorer</span>
              <CashIcon className="h-4 w-4" />
            </a>
          </div>
        </Tooltip>
      ) : data.eventType === 'Deposit' ? (
        <Tooltip content="Deposit">
          <div className="rounded bg-green-100 p-1 text-green-600">
            <a href={link} target="_blank" rel="noreferrer noopener">
              <span className="sr-only">View transaction on chain explorer</span>
              <InboxInIcon className="h-4 w-4" />
            </a>
          </div>
        </Tooltip>
      ) : data.eventType === 'StreamPaused' ? (
        <Tooltip content="Pause">
          <div className="rounded bg-yellow-100 p-1 text-yellow-600">
            <a href={link} target="_blank" rel="noreferrer noopener">
              <span className="sr-only">View transaction on chain explorer</span>
              <PauseIcon className="h-4 w-4" />
            </a>
          </div>
        </Tooltip>
      ) : data.eventType === 'StreamResumed' ? (
        <Tooltip content="Resume">
          <div className="rounded bg-green-100 p-1 text-green-600">
            <a href={link} target="_blank" rel="noreferrer noopener">
              <span className="sr-only">View transaction on chain explorer</span>
              <PlayIcon className="h-4 w-4" />
            </a>
          </div>
        </Tooltip>
      ) : (
        ''
      )}
    </div>
  );
}
