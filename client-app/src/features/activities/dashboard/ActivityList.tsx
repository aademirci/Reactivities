import React, { useContext, Fragment } from 'react'
import { Item, Segment, Label } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite'
import ActivityListItem from './ActivityListItem'
import { RootStoreContext } from '../../../app/stores/rootStore'
import { format, parseISO } from 'date-fns/esm'

const ActivityList: React.FC = () => {
    const rootStore = useContext(RootStoreContext)
    const {activitiesByDate} = rootStore.activityStore

    return (
        <Fragment>
            {activitiesByDate.map(([group, activities]) => (
                <Fragment key={group}>
                    <Label key={group} size='large' color='blue'>
                        {format(parseISO(group), 'eeee do MMMM, yyyy')}
                    </Label>
                    <Segment clearing>
                        <Item.Group divided>
                            {activities.map(activity => (
                                <ActivityListItem key={activity.id} activity={activity} />
                            ))}

                        </Item.Group>
                    </Segment>
                </Fragment>
            ))}
        </Fragment>
         
    )
}

export default observer(ActivityList)
