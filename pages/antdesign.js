import Container from '@mui/material/Container';
import ToTop from '../components/ToTop';
import { Row, Col } from 'antd';
import { DatePicker, Button, Divider } from 'antd';
import { Form, Input, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import 'tailwindcss/tailwind.css';

export default function AntDesign() {
  return (
    <Container>
      <h1>AntDesignテストページ</h1>
      <ToTop></ToTop>
      <div style={{ marginTop: 32 }}>
        <h2>DatePicker</h2>
        <DatePicker></DatePicker>
      </div>
      <div style={{ marginTop: 32 }}>
        <h2>ボタン</h2>
        { BasicButton() }
      </div>
      <div style={{ marginTop: 32 }}>
        <h2>Divider</h2>
        { BasicDivider() }
      </div>
      <div style={{ marginTop: 32 }}>
        <h2 className="mb-3">Form</h2>
        { BasicForm() }
      </div>
    </Container>
  )
}

function BasicButton() {
  return (
    <div>
      <Row>
        <Col sm={{ span:24 }} md={{ span: 24 }} lg={{ span: 2 }}>
          <Button>ボタン</Button>
        </Col>
        <Col sm={{ span:24 }} md={{ span: 24 }} lg={{ span: 2 }}>
          <Button type="primary">ボタン</Button>
        </Col>
        <Col sm={{ span:24 }} md={{ span: 24 }} lg={{ span: 2 }}>
          <Button type="dashed">ボタン</Button>
        </Col>
        <Col sm={{ span:24 }} md={{ span: 24 }} lg={{ span: 2 }}>
          <Button type="text">ボタン</Button>
        </Col>
        <Col sm={{ span:24 }} md={{ span: 24 }} lg={{ span: 2 }}>
          <Button type="link">ボタン</Button>
        </Col>
      </Row>
      <Row style={{ marginTop: 16 }}>
        <Col sm={{ span:24 }} md={{ span: 24 }} lg={{ span: 2 }}>
          <Button shape="circle">1</Button>
        </Col>
        <Col sm={{ span:24 }} md={{ span: 24 }} lg={{ span: 2 }}>
          <Button type="danger">ボタン</Button>
        </Col>
        <Col sm={{ span:24 }} md={{ span: 24 }} lg={{ span: 2 }}>
          <Button disabled>ボタン</Button>
        </Col>
        <Col sm={{ span:24 }} md={{ span: 24 }} lg={{ span: 2 }}>
          <Button ghost>ボタン</Button>
        </Col>
        <Col sm={{ span:24 }} md={{ span: 24 }} lg={{ span: 2 }}>
          <Button shape="round">ボタン</Button>
        </Col>
      </Row>
    </div>
  )
}

function BasicDivider() {
  return (
    <div>
      <Divider />
      <p>
        木曾路はすべて山の中である。あるところは岨づたいに行く崖の道であり、あるところは数十間の深さに臨む木曾川の岸であり、あるところは山の尾をめぐる谷の入り口である。
        一筋の街道はこの深い森林地帯を貫いていた
      </p>
      <Divider />
      <p>
      吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。
      この書生というのは時々我々を捕えて煮て食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。
      ただ彼の掌に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。掌の上で少し落ちついて書生の顔を見たのがいわゆる人間というものの見始であろう。この時妙なものだと思った感じが今でも残っている。
      第一毛をもって装飾されべきはずの顔がつるつるしてまるで薬缶だ。
      その後猫にもだいぶ逢ったがこんな片輪には一度も出会わした事がない。のみならず顔の真中があまりに突起している。
      </p>
      <Divider dashed />
    </div>
  )
}

function BasicForm() {
  return (
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remenber: true }}
    >
      <Form.Item
      label="UserName"
      name="UserName"
      rules={[
        {
          required: true
        }
      ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
      label="Password"
      name="Password"
      rules={[
        {
          required: true
        }
      ]}
      >
        <Input.Password />
      </Form.Item>
    </Form>
  )
}