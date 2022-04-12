import axios from 'axios';
import { useContext, useEffect, useReducer } from 'react';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Store } from '../../Store';
import { getError } from '../../utils';
import Loading from '../Loading';
import MessageBox from '../MessageBox';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, orders: action.payload };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const OrderHistoryScreen = () => {
  const { state } = useContext(Store);
  const { userInfo } = state;
  const navigate = useNavigate();
  const [{ loading, error, orders }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const { data } = await axios.get(`/orders/mine`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
  }, [userInfo]);

  return (
    <div>
      <Helmet>
        <title>Order History</title>
      </Helmet>
      <h1>Order History</h1>
      {loading ? (
        <Loading />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Row xs={1} md={2} lg={3} className="g-4">
            {orders.map((order) => (
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      {order._id}{' '}
                      <Button
                        type="button"
                        variant="primary"
                        onClick={() => {
                          navigate(`/orders/${order._id}`);
                        }}
                      >
                        Details
                      </Button>
                    </Card.Title>
                    <Card.Text>
                      <ListGroup>
                        <ListGroup.Item>
                          Ordered On: {order.createdAt.substring(0, 10)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Total Price:
                          {order.totalPrice.toFixed(2)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Paid:{' '}
                          {order.isPaid ? order.paidAt.substring(0, 10) : 'No'}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Delivered:{' '}
                          {order.isDelivered
                            ? order.deliveredAt.subString(0, 10)
                            : 'No'}
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default OrderHistoryScreen;
