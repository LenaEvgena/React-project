import classNames from 'classnames';

export const getLiOptions = (isFetching: boolean, filter: string) => {
  return [
    {
      type: 'all',
      cls: classNames({
        'busy': isFetching,
        'active': filter === 'all'
      })
    },
    {
      type: 'drama',
      cls: classNames({
        'busy': isFetching,
        'active': filter === 'drama'
      })
    },
    {
      type: 'melodrama',
      cls: classNames({
        'busy': isFetching,
        'active': filter === 'melodrama'
      })

    },
    {
      type: 'thriller',
      cls: classNames({
        'busy': isFetching,
        'active': filter === 'thriller'
      })
    },
    {
      type: 'crime',
      cls: classNames({
        'busy': isFetching,
        'active': filter === 'crime'
      })
    },
  ]
}
