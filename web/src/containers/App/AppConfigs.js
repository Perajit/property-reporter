import DashboardPage from 'containers/DashboardPage'
import SummaryPage from 'containers/SummaryPage'
import ListPage from 'containers/ListPage'
import FormPage from 'containers/FormPage'

import HomeIcon from 'material-ui-icons/Home'
import ViewListIcon from 'material-ui-icons/ViewList'
import AssessmentIcon from 'material-ui-icons/Assessment'

import {
  DASHBOARD_TITLE,
  PROPERTY_SUMMARY_TITLE,
  PROPERTY_LIST_TITLE
} from 'constants/labels'

const mapComponentToIcon = (component) => {

}

export const getRoutes = () => {
  return [
    {
      path: '/dashboard',
      exact: true,
      component: DashboardPage
    },
    {
      path: '/properties',
      exact: true,
      component: ListPage
    },
    {
      path: '/properties/add',
      exact: true,
      component: FormPage
    },
    {
      path: '/properties/:id',
      exact: true,
      component: FormPage
    },
    {
      path: '/summary',
      exact: true,
      component: SummaryPage
    }
  ]
}

export const getLinks = () => {
  return [
    {
      id: 'dashboard',
      href: '/dashboard',
      label: DASHBOARD_TITLE,
      ItemIcon: HomeIcon
    },
    {
      id: 'properties',
      href: '/properties',
      label: PROPERTY_LIST_TITLE,
      ItemIcon: ViewListIcon
    },
    {
      id: 'summary',
      href: '/summary',
      label: PROPERTY_SUMMARY_TITLE,
      ItemIcon: AssessmentIcon
    }
  ]
}
