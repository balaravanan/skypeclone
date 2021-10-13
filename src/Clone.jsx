import { AiOutlineSearch } from "react-icons/ai";
import React, {useState} from "react";
import { CCard } from "@coreui/react";
import { CgDialpad, CgCamera } from "react-icons/cg";
import {
  BsFillChatSquareTextFill,
  BsBell,
  BsPencilSquare,
  BsPersonPlus,
} from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import {
  RiContactsBookLine,
  RiArrowDropDownLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import { FiVideo } from "react-icons/fi";

function Clone() {
  const [currentValue, setValue] = useState("");

  const [inpushow, setInpushow] = useState(false);

  const showonit = () =>{
    setInpushow(true);
  }
  return (
    <div>
      <CCard
        style={{
          border: "1px solid #CBAEAC",
          width: "20%",
          marginTop: "-33px",
          height: "850px",
          position: "fixed",
        }}
      >
        <div style={{ marginTop: "30px" }}>
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="avatar"
            width="40"
            style={{ borderRadius: "50%" }}
          />
          <div style={{ marginTop: "-33px" }}>
            {" "}
            <strong style={{ margin: "50px", opacity: "0.5" }}>
              Theri Balaji
            </strong>
          </div>
          <div
            style={{
              marginTop: "-20px",
              marginLeft: "144px",
              opacity: "0.4",
            }}
          >
            {" "}
            ₹ 0.00
          </div>
          <div
            style={{
              marginLeft: "264px",
              marginTop: "-20px",
              fontSize: "13px",
            }}
          >
            <li></li>
          </div>
          <div
            style={{
              marginLeft: "272px",
              marginTop: "-17px",
              fontSize: "13px",
            }}
          >
            <li></li>
          </div>
          <div
            style={{
              marginLeft: "280px",
              marginTop: "-17px",
              fontSize: "13px",
            }}
          >
            <li></li>
          </div>

          <div style={{ margin: "5px", marginTop: "20px" }}>
            <input
              placeholder="      People, groups & message"
              style={{ width: "265px", height: "25px" }}
            />
          </div>
          <div
            style={{ marginLeft: "12px", marginTop: "-30px", opacity: "0.4" }}
          >
            <AiOutlineSearch />
          </div>
          <div style={{ marginTop: "-27px", marginLeft: "250px" }}>
            <input style={{ width: "20px", height: "25px" }} />
          </div>
          <div style={{ marginLeft: "255px", marginTop: "-24px" }}>
            <CgDialpad />
          </div>

          <div style={{ marginTop: "25px" }}>
            <div style={{ marginLeft: "20px" }}>
              <BsFillChatSquareTextFill style={{ color: "#1f99cb" }} />
            </div>
            <div
              style={{
                color: "#1f99cb",
                marginLeft: "13px",
                fontSize: "12px",
              }}
            >
              {" "}
              Chats{" "}
            </div>

            <div style={{ marginLeft: "80px", marginTop: "-37px" }}>
              <IoCallOutline />
            </div>
            <div style={{ marginLeft: "76px", fontSize: "12px" }}>Calls</div>
            <div style={{ marginLeft: "150px", marginTop: "-37px" }}>
              <RiContactsBookLine />
            </div>
            <div style={{ marginLeft: "137px", fontSize: "12px" }}>
              Contacts
            </div>

            <div style={{ marginLeft: "248px", marginTop: "-37px" }}>
              <BsBell />
            </div>
            <div style={{ marginLeft: "223px", fontSize: "12px" }}>
              Notification
            </div>
          </div>

          <div style={{ marginTop: "15px" }}>
            <hr />
          </div>

          <div>
            <input
              value="       meet now"
              style={{
                width: "100px",
                height: "25px",
                borderRadius: "20px",
                marginLeft: "10px",
              }}
            />

            <input
              value="       new Chat"
              style={{
                width: "100px",
                height: "25px",
                borderRadius: "20px",
                marginLeft: "30px",
              }}
            />
          </div>
          <div style={{ marginLeft: "15px", marginTop: "-24px" }}>
            <CgCamera />
          </div>
          <div style={{ marginLeft: "155px", marginTop: "-20px" }}>
            {" "}
            <BsPencilSquare />{" "}
          </div>
          <div style={{ marginTop: "-20px", marginLeft: "95px" }}>
            <RiArrowDropDownLine />
          </div>
          <div style={{ marginLeft: "230px", marginTop: "-22px" }}>
            <RiArrowDropDownLine />
          </div>

          <div style={{ marginTop: "20px" }}>
            <strong style={{ opacity: "0.4", fontSize: "14px" }}>
              Recent Chats
            </strong>
          </div>
          <div
            style={{ marginLeft: "85px", marginTop: "-17px", opacity: "0.4" }}
          >
            <RiArrowDownSLine />
          </div>

          <CCard>
            <div>
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGRgaHBgYGBocGhgaGhoYGBoaGhoYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQhISs0NDQ0NDQ0NDQ0NDQ0NDQ2NDQxNDQ0NDQxNDExNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAPsAyQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAQIHAAj/xABEEAACAQMCAwUDCQUGBQUAAAABAgADBBESIQUxQQYiUWFxE4GRBxQyQlKhscHRFSNyguFikqKywvAkNFST0hYzg7Px/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAECAwQFBv/EACYRAAICAgIBBAIDAQAAAAAAAAABAhEDIQQSMSJBUWETcSMyMxT/2gAMAwEAAhEDEQA/AKCAJKK+BtBGmmknrJCDGvNosr1MyU0jNGowAFWmSYYlicQ7hlpmOksukEwop70SDJranuI/veFiBPaaY7BB1tVAE3rXgAihq+IK1ZnbAiqx9qCK9xmZo14Ra8JLc5m74eKY1eeB64J/KKqJN2S27s2dKk457bD1PTrNWo1H3VC3oQfuBiqszMBzAwcgHCgjkB455+ufATSk7AkhiCR9IYz8eYEixp0MqSMpORyO/XHriM6VyMSu2o0nYKHHI7A8+eMD84Ul5gFWw2Ny25JJxyC4HvOf0diexldXw5CLFr5YSKlS1nUrZH3jyI6GFpw4jeOkLs/BbuCkECWJ6AK8pWuCnAEtNOoNMAKZ2hsdQMR2aaNpdeKoDKdebNCxUEaxFN5VyZOFZthNjwtsZgxqhfrxNvaCa3Fqw5yD2RgKhm9MEyJ0xMCvPNVMEN0akzZBMjJ6SVDGRDeFjEd0agleo1tM3F4REMc3bxVduMQO44kYDUuixxGIjuHhPCKWWnqVpnnGNtb6IxUWK1ojAiftK+Cich9I+OeQ+GD8RC6N7gRfdstSoWY7YAX4frISJoXJTz06fkZJT4dr6b9D+UOt7YuwC8zsB5k+PrLDb8DdTgE5A1YK4DD+wwJB9Dg+UqlNLyWxxuS0I7XgClh03/P7xv08JdeDcItmUB6SFhnvFFyRnxI5QGzoEsB8Y/pKEGcD06ny9ZXKd6LYQrZW+P8AAKNFva0hp1HSyj6OcEqwHQ7MD7opCDEc8W4wjh6LJpdQHUhgynSwDKSOTYbkZUrniOnIzL8VuOyjLSloOo3WhsR5T4kMTnlS+JbMKTiBxzk0iDkW2/vwQZVbmrkmavfbQE1cmDQ1JFl4XRBwY49iJX+HXWBGrcRAEdEbBOJURgxN7ISW/wCI6jiBfOJCidohuKRRsRhwu11neH8ase9kCMuC2owI3KkVm6cOXHKAXVkF3lwS1GIvv7YGZ3mpjTRTKqQZklhr8PxFVzbkb4l8JWOTXsAtRmLeh3oSqzKLvJkLGNGlym9zsuZElbAgl/c5EB2DXF5iT8Hy5Yc8Dl5H/ZiWpkmWrsPZFndsd1VAY+BbURv/ACmRnqNkoblQz4ZaYORscdehlssHSppcY7vdqLuSO6QAPs97SemeeeUV29LvYOx+qfH+sYU7VVOvdXGxIJAZd9mA2YeGZhlLs7OhBdY0SW5VHbbIJz/v4GMalFKqFTyO2xxASw5zRLrT6c5HtQIBu+y9NLWp7Jf3iHWMbltA3Hie6T7wJzK6plmzOmcY4/UtlRwEZWbBB1ZBIJwMHB2XnKBUcM7sBpBZiF+yCSQvuzibMTfXZlzKPbQpa2mbe3JMOcSayUS1MqcTRbDMirWRWWGigmtygibBRElvTOdo4oWOobyOyojVLNb24xGmJqin3fB8biAfMGl4v6YAifCxWCQ44hbjMxYJgya/fnBbavgyvM6iUdiwodoPVpz1KuCJuXnGnkfYXYBubeIeIUcAyz1G2ia/QGa8GfdBZWlmrmT1qeDBqs6i2h2avUm1Gjrg7CWvsj2frXP0EOjq5yEHj3vrHyGTAkhH+z9+X+/ITpPBOz1SjbCmlNtbZdzyy7Y2BO2FAVfUE9YG3HLLh1VqRpNXrUyNVXuBVcj6CZJK4zgnGc532wB735Vau/s7ZE8C7vU+IXRj4mQlHsqLoS6uxzV4HXCb0228MN/lJJH39R4GOkpIIPMcxtv/AF8/TluJt2D7W3d7cOriitOmmp9COrFmOlFyztzw5z/Y85c+JWC1FJC98A4IwM+RP6/rM8sFL0s0Q5Fv1I58tXvlc7j+mPx++avQ1qyklQRjK4yNuYz4ExZ2qFS3rBnVkUgYZhhGbJ7qv9EtgcgYDT7Wom/0vTfMqjjk60WOcV7lc45eM9V01hlQhRpyFYqMatJJ725BI90gpU3I2ExYUtbliMZJOPDJziWi3tABynQpJUYbbdlWrIw5iYoVjmWO9stuUSpa9/EWh7YxtKrGTtTfrGnDOHbDaMK9iMSLQ0ytWzYaN6N0Yqv00GS0WOIIGT8Rutoj+cxpcW5YQD5iY7FTGN5e56wOjd7xQ9yTI1rQnFSVFSiXKhe+cI+e+cp1O9Ik37RMxS4ibIuBajeCA3NeIvnp8ZhromShxersOpPdOOcb8K7GXlzhlp6EP16h0DHkuCxHmFx5y3fJnwFDR+dVUDVGdhSLDOlEwupQdgxcP3vADHXPQGebFpUTUSpcB+T60oYasPnFQc9Q/dg/2afJh/Fq90s3FUqtRZLcrTcjSrEHCjqVA645eHPpKJxrj1QVq7rWYLbO/wC7VlANOhb6naooGpg9d0Tc45jpElxwss7WwZg9UWNnVfLEvUZWurmo2T3jhEX348YEqoIuvk1umOz0DnOdT1Rnxz+7MDT5LbwHarbr5a6rD3ZpyBeIhlFS6UuHFxcVaYVqiu1BFtLdH0ggKHSqdTd3ON5Yuy5+bUbuu25tbejbr5NSoe3qKPWrVxjyEBlk7D9mvmVFlco9V31O6ZxgbIikgHAGTv1dpZQf/wAnFzZGjpSjinXNraWzMow5ub+rqdnYYLMKaPjPLnLv2Lpfvr10Z/YrWWhSRnqOAaCYqOutj9J26bd3ygBbq9JHVkdVdGGGRgGVgejKdiJQOMfJXbuS1tUaixydDDWm5JwNwy88cyBgbToIORMgQA4v/wCirq2JL09a/bpnWuPTAYe9RJaTjE7Ok592/wCDezzcoO4T+9A+qzHZ8eDE4PnjxMAKnd1hF9tb5fVBK13k84XaXAkWiSaLbYKAJvd1AFiyzuDN7vJEAK/xVtTe+EWqjEhr25zkzCPjaKyVDEsMYg+JgtmaZ84hplTKGRwu45yIJkiWFdEtraM8YHgrYzvLBwOwGBtLE3Dhp5QsVHLbmgyHeGdn+GvdV0oJsXO7YyEQDLOfQDbPMkDrHnaCxAB2lq+SThqpbvcsF1VXKI3UJTOkr5ZfVsOelfLDsVF8oUkpoqINKIqoo8FUYA+AkinrIWfw6fefGSDbAiGIP/SVAo61Czl/a62HcJNWstZj3dwQyIBvyTHUyW17O29NkZQ5dHeqHepUdmqOnsyzs5JY6dhnlNO110y2VwyMyMEyGUlWGGBOGG42BnD24/df9Vc/9+r/AOUAO3J2TtQjUwraGpLQYa2z7NXapp1c93ZiT1zM1Oylq3t9SORcFjVHtKuCWdXOkBsLkqvLGwxy2nEP23c/9Vc/9+t/5zSrxe40km5rnAJ3rVfD+KFAdxqdjbbSQPaq5dKvtPbVDV100ZEPtGYthVdgB0zGvB7Cnb0xRQFVBYglixLOxZmZmOSSSTmese7TRTvpRBk89lA3MnO/r0gBOWKnPxk6+UBSr0b6J2/gP6Qm3fGx6bfHlACfT4SO6t0qIyOoZHUo6nkVYYIkmJ6AHzb2h4Y9pc1LdyToPdY/XRt0fwyQRnHUEdIJQuSpnR/lq4bj5vcgdWoOepyC6e4Yq/3py6k2TJeSPgu/DK+VBjPVmVOxvNMZftUAc5FonFhd7iLae80qXuuQGriQS2WN6GKDeS6YmHEdM9+1pKiHYW1EyczFtT749YyqW+DB0wHHrJRdhJUjoHAU2Es5p92VrgTd0S00m2iaIplX41Z6gdpaOz1qKdnQTYAIGPQd8lwT4Hvbnxiri7qilmGoAjK5C6t+Wo8s+MtFTdQCunIGV8NuW0K0FmaFQNgjl0+AP5zZn3PpILZNKkHxb355flNUbJPp+YiAw9BKgKOupSNwc9PSJX7G2Gf+WT/H/wCUdUj3pm+rqis7nSiqzsT0VRkn4AxgUTtZa8OsqQPzSk1R8imhBOSObsSchRtnx2A8qF2Y4C97VNNe6g3quBsiMT3VH2juFHkT0gfaDi7XVd67Z7xwi/YQfQQeeOfiST1naOyfBha26U8d8jXVPjUYZbfqBso8lEBD4PJqbwHODmTMpGCNwYhhrKTywfHO2RBPaYLIcggAgHnt59ZlbjHPMg4hUJAYAPg8xsy+viIAOLS51Dfn1hIldtbjBz4xzRrwAR9vLAXFqbfSzPUYCmV09x0BcOxYgacIQcbkE48uApashIYEEHBB5gjmCPGfQHa0Uqa0rqqKhWgzZKE5Raq6HdgpBIXunbl4Y5cm7ScFrWzD25DNUy2sHIY53ycDvbjJwMnOBiSTIsrmoiD1HJYDO0IqGRaN4wsZ2q7SSsmdppbHaEU270VD7Aa2eZJ+z/KNEUZhGiRbJKhDXuoGjlmHrJHpsekksaB1ZxJxjRCUrLvwJjgS0JWwJU+GVMARq91ttzg0V2PbbhCXKq7lwEqKyBW0htBBIcfWU8iPIxzVbeSW1H2dJEH1QAfNjux+JJkLDflItlqVGCPpH0+Jzv8AcJFTOze78f6SVz+B/WQpyPqPziGZQ94e/wDAysfKje6LEqDg1WSn/Lu7e4qhH80swPeX1Eovyuv+6t1/t1G/uhB/rPxjQFE7H2Yq31upGRr9ofSmrVN/LKge+d0Uzj3yZJm/HlSqEfFB+ZnXzARkiEWb/Ubbqp84ODJkGfWIYWUxsw38R+kFvqQx5+I2PvjCi+oYYZ8+sxcUlIPMwAriVMOy7bE/AnaMretEV2mmpryNiQQPBmAXV4kkjHrDqd0o5ZPuxEA/o1ARpYZB233G/MEeEqnbbssGta1RGqPUpgvSVmJCKpVqlOmoxkFVOAcnOADjADlLoYyx0D1xCX4sdDFaT1MKxI2BfAPdUNzY8sHA35x2Hk+cwhO83CYjAUVy2hSqam0qTkquTpUnqQMDPlPPbbSZR2BqVWS+2wYOaRBkbgwJDOjeSf575xEdU21HzkaJplgNLymUpkHOI9FmPCZ+Z+Ussz9hdRuCJK90TDPmY8Jn5n5R2hdixdjaOq3Z3ZvplU/eOuFVV5AMOpPwjxAR9ZgOm+ff3szThFAU7dF641EdcsS2D8ce6bOx6yp+TTHwjy1SX0k5Glum/LqeXXwm6fRHr+X9YHSOHBPXIHwhwXYe8/7+ERIjP0hOf/K/9K1Hlc/jQnQPrCUH5XVGu1znH/EZxzx+45ecaAQ/Jf8A8/8A/DU/zJOt1Bic07GWC0OLGmpYgUWPexq7wRsHAA6/f751CssBESmSod5CBJkiGHUTCGGRBaBhUAKV2mytC5ZRpx9E9S+tSW9xAx6St9nePVa7tSeoFf6SkKveXqMeI/A+Rl17c0x82fA+zn+8P0nHGc06iuhwykMp8x+I6EdQTJJJorcqkdVtOHLr1O7uf7TbD0HSWmzRQBgSo8G4itemtRdujD7Ljmp/LxBBlisbiQqiw5l2s4E1rXbAPsqhL023xuclCfFfPmMHxidjtOxdoOD07ukabd1h3qbjmj/mp5EeHngzil5Tek703Uq6HSw8D5eIIIIPUEGTTKZR2YFLJky2gInrTeNUpbTPmnQOMkrFo4f5TH7O8o9ooJP7ASH5WRUmOTSE97ISSemsgR+yEmtrUO6rjmQPd1+6YjTgdLvs/wBkYH8Tbfhn4wHBW6GFyxzgHl0x/qGwkerb+v5jnNqzb8yPv/HlA7m40j18PzERqI/aZqgeGfLfnGZ6en5mIrVu+D6/gY9/QfhEyEJWmyNB3prxTglvcke3pK+jOjVq7urGrkRz0r8JLbDLQ3r7oExFw/s9bUKmulQRHwRqGc4PMZJjWqs8v0pJUEABMTZZkjeYEACqBhimA0OcKLdBABL2x/8AYYeIb4BGP44nF79O9O2doqOtGHgj/FhicWvvpSSKp+R/2AvNNR6R5OoZd/rJzAHiVYn0SdFtLhQcZE4lQrsjq681IIzyOOh8jy98v9O5Wqi1EO2OnMdMHzHKKWiUHqjoaODylJ+UfgmtEuUHep4SpjqhPdb+Vjj0Y+EM4ZxQjY5P3ywBkqIVYZVgVYHqGGCPhETOQ2lGMOQk37ONN3RuaMVz4jo3vGD75HeDAlEotlra6mKT7wrXE9vX72Iw9tIOJha2WQGegy15ua029WQZNLHwunpog9Wyx9/L7gsqq1snA5nYe+XCvhVC9AAB7tvyhKLXksw7bYMxEW37eENd4mv7ga8eHP1iSbdItySqLN7c98SwjlKrbVsuo8xLQv0YSi09kcL0TWSbFoSfpe6a0kwoHpNXbv5kS0jUd6SgZE9ow3KZpjY+sAB2Se0wgpNDjOIAb0lhSJj16/pNaYUDOd/Hp7plTnqPjAAe4o6kfxOf6Tht8g1Tv+jacJvqYDsPAkfA4k4QcvBTldUKigjPgl/7JsH6Dc/I8s/kf6SD2cz7OW/gkylZEi30LgKwIO3MSyWV5kCcytuI6O4x7vQ/Z8j5fhLJwfiOGCnkf985nlFxdM1RkpK0OO09LDJVHJhob+Jd1+IyP5ZVeI1BoPlL1c2wr0XpggMRlM9HG679AeR8iZx/ivEWwyHIYEqQeYIOCD5gwolZDbX3fPrGnz6VSm+DDvbx9UVtF3p3fnCBdRCj4h1JszrSwxRgjJsb8LfXXpL4umfQHJ+4GXi9feUrsuEFyjOcBQ53zz06Ry/ilzcq/eUgr4ghh8QZh5Ndkl8Gzjxai39i2+uRTRnPht6ymPfkkk9d4y7W3RLBM7cz6dB8QfhK5NPEwLr2l7mXlZX26r2G1pe99N/rKPicS8pVOnGfgAPxzOYqcHPhv8J0i3fOPPlKubBRaa+y3hytNMfU+Q9BPnvi1/V9rUJq1CNbhQajkABzyBPLlPoUEKmTyUZPoBkz5quahdyf95O5+8zEjWzzXTn67/3m/WXb5KCzXj5LECg/Mk7+0pAc+vOUhUnS/kcte/dPjktJAf4jULD/AArGB01ExNseU21TdREMwKRPM7eEyo6Ly6n8hJgmeew/GbbcgNvugBh9hOH8fpaLmuuMYqOQPIsWH3ETt77zjfbMYvq+2O8n/wBdPebOHuTX0ZuV/VfsS4mSJgGenR6o57bAboTfgnESHFJjjJ/dk7d77BPn089uoxtXp5i+nYe0qIn2mAPkue8fcMn3TByoqjbx22dc4LxIKuajKoUZYkjSAOrNyA985z8oVFPnPt6Z7lfU+MY7y6QzD+LIbffJMcX1glUqVJCqxX2eolVwBpwp5f1nu0/Cj8zJ3yjB1yen0W92lif5ROYsnqSOm8LUW2c4EJmUtsmF/NfP7ppRlY7zC7MxaHh1g0685ek58I7Ll2c4YXR6hOMHQnmQMtn4r98HubSvRbUmc9SpBBHgwPMc+Y++PuD3dOnbUwzYOGJ7rHdmJ6DwxIeJXiGlUdWUgIxO+47pxkcx75xMj75H8nVh2hj8aKDc3Rdy7YyfDly6CRa4IHmQ87kaikkciUezthYaXXs1xYMqhxjQAufHGOnjylB9pH/ZIa6jDOMaHP8ACr6SP8Y+Eo5ce2O/dFvHuMq+TofaGvi0udOc+wrY8c+zbE+dlrAT6Lv110nX7SOv95SPznzWr5A9BOUjewo15075J7vFG4A560PuKbfeGnKi0v8A8l1YBrkZ2xRI9Qao/MQb0COp067E7Q+3J6mJKNbwjS3q7ecjEkxkPjNiMdTIadTaS5z1+GZIR6co+USnpvCftojf5k/0TrGJzL5TUxWpHqUYe4Nt+JmniOsiKM6uBTQZkTSZBnWOe0ZcbT3DaIy9TODTTC7ZOt8gEfyh/umlVovubx1QopwCcnxzjHOYuXFuLo1cSSjNOXgl4bxcpWYNyc4J5d4Hun8R750GzuhVp4blgq3TYjBE5bb8DuaqhkpEq+Qpyq53IJ3YbZB73LY7y+UV0uV1cyC+F0KSMagoydsn3zjZIpVR2McpSvt49ik1ECuyg5Csyg+IUkA++Eaolp3JwJP85M1x8GGXkcgx72es9ZLNnQv0j4nogPifuGYlRDLdZIVtaYAJB1k4znUzthvXAUfCbOXn649eXor4mDvkp+Fs34jxIZCjHQADl5BR4QC+B9m5Gx0n4H6Q9CMyFLUg6zkv1zzAHPbpM31fuMP7J+B2+E4+K/yJ/aOzlj/G19MRAzYSMGbCejPN0bGPOyy5ap9lQjk56h8AEdcqzn+WIpZux9UBa4xuRTbPkhfUPUhpTyf8mWYV60X6lW1KCPDPunz1xa19lXq08YFN3Qfwhjp+7E7/AMOAemHQ5DDPmB4Y6YnH/lBs9F/VOwDhHG4GxRVP+JGnJRuZV1Yy8fJdV/4iqh+tS1f3KiD/AF/dKaKQ+18Af0xLV8mjKL9V1HvpUXcAdA/j/YjEdbTwh1IHwg9W4p0xl6iJ/EVB92ecAftMhOi3pvVflkDTTH8TP+nvitIZZ6S9ZuKwP0SD59B8JVfnbne4qqvhTTf8OZ958sQ224lpG1Jgv2mwu3kp3Ji7IdDlkcj6ZHmAo9wBBwJzX5QartVVXxmmWVCOboyo4LeYPUbd7y36DbV9Y1Ny5gctvPzlC7f0/wB8jHmyZ9BqIA+775p4u8iopzuoMpZE9mEMk0anOuc60wesYou99o0uRiLWXJmXNvRfi1sZ2987uBr9kioMhM4CIAMIv2jsB65glzckBgjv3vtNkhfMjG5ktKntIa6TM+Ik+xp/65OPX3+RbRtcmHfs6H8PtgY4+bS2OFUZ5ZXZrRoQlhhcGq6ZOO6updOMnP2T5zNswjCiQZim+6pm/HLo7QpXiNNsIrGptuy5yAORZidhz6jykfFrjUuVPdbAXGeQznn54EKbgNFVfQpBbV9dyASOeNUX1LYqqqTqIAGd+nr0kcGH+RN+EXZuR2xtLyxcJmSNSxIzOynZx2jOZZex65NVfH2Y+98/lKzmWfsG4+cMD9gt71ZR/rMq5G8TRZi1JDNVencnQzKmW1BSQO6pwSOXQRD2l4d7WoKlVzUOkICe6wUEkA6MA7s2+M7y135AJPU5z6eH3SvXCGo2JxmbiqtZ0wThBj4/jM2trl1CKA5JC4wp3GOfTbMc3nCjTXUWB9017OpmuvmGA9TiR3exFg4V2eVMNWJYnmF+iPMnm33S5UOHU9Iw2U6Be6vwEht7TCjMntnZDty6+EsSSGbpbBdkTHngD4+M0agBknc+J6eghusma1rfWMSuULGmCU2Ox5HUuM9AxC748jEPb4Z0E9MAfza8+7uLLUltg5Pjk+7l+Uq3bsgqjD+yB5jL7jy/WaOGnHIr+SrkbgymYmGSeBmczvtHGti28SAJT3jK7Mht03mWcbkaoSqJJTo7QS4p7x0lPaA3NPeSmvSQjL1EvDljbEVWWxjPMUVohN7AKVbEPtLmJmk9kd5yTsD5qsXXPOTjlA6/OTg6ZCS0D1FgjiFtA35zdCZnlE1jrsjW03SDo+pD6FSR96rEsZ9nP+apfxZ+Ckj8JPJuD/TIw1JFv4mMk+ZPug9pa4GesKuPpGZpzirybwC9t9bKnPmx8PDf4wThvD1p3SFWBGog4OQMggDPriM1+ueucZ8gDgQW0HfT1B/ONiLuTtIwR1mU+jNDH4GG0cdJPy3gltyEKSAGQpc77L+MqHb1Bsc7haYX3tV1/wCVJduko/bzn/LT/wA1f9Jfg/0X7Kc39H+ilCZJmJhp2nKjlKNsDuJtbLvPVOcmoCUKVyLmqiFqdoBctvD35QJpZN6KoLZtaDeMYJbQyRi9Cmtn/9k="
                alt="avatar"
                width="40"
                style={{ borderRadius: "50%" }}
              />
              <div style={{ marginTop: "-50px" }}>
                {" "}
                <strong style={{ margin: "50px", opacity: "0.5" }}>
                  Vairamuthu B
                </strong>
                <br />
                <span style={{ opacity: "0.4", marginLeft: "50px" }}>
                  Hii How r u
                </span>
                <span
                  style={{
                    opacity: "0.5",
                    marginLeft: "140px",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  10:03
                </span>
              </div>
            </div>

            <div style={{ marginTop: "30px" }}>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D0BAQFdFQtj-He03w/company-logo_200_200/0/1625674118900?e=2159024400&v=beta&t=r-Rc_j8beKW8wlOn3z3Z93VvAcPe3Ge0W3SiiuaFe1w"
                alt="avatar"
                width="40"
                height="45"
                style={{ borderRadius: "50%", marginTop: "-10px" }}
              />
              <div style={{ marginTop: "-50px" }}>
                {" "}
                <strong style={{ margin: "50px", opacity: "0.5" }}>
                  Hr Module Group
                </strong>
                <br />
                <span style={{ opacity: "0.4", marginLeft: "50px" }}>
                  Flow2 Municipality
                </span>
                <span
                  style={{
                    opacity: "0.5",
                    marginLeft: "86px",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  10:03
                </span>
              </div>
            </div>

            <div style={{ marginTop: "30px" }}>
              <img
                src="https://conandaily.files.wordpress.com/2020/04/hrithik-roshan.jpg"
                alt="avatar"
                width="40"
                height="45"
                style={{ borderRadius: "50%", marginTop: "-10px" }}
              />
              <div style={{ marginTop: "-50px" }}>
                {" "}
                <strong style={{ margin: "50px", opacity: "0.5" }}>
                  Sathish
                </strong>
                <br />
                <span style={{ opacity: "0.4", marginLeft: "50px" }}>
                  Work Done Na
                </span>
                <span
                  style={{
                    opacity: "0.5",
                    marginLeft: "114px",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  10:03
                </span>
              </div>
            </div>

            <div style={{ marginTop: "30px" }}>
              <img
                src="https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFuZHNvbWUlMjBtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                alt="avatar"
                width="40"
                height="45"
                style={{ borderRadius: "50%", marginTop: "-10px" }}
              />
              <div style={{ marginTop: "-50px" }}>
                {" "}
                <strong style={{ margin: "50px", opacity: "0.5" }}>
                  Nithya Nandan
                </strong>
                <br />
                <span style={{ opacity: "0.4", marginLeft: "50px" }}>
                  Hii Buddy
                </span>
                <span
                  style={{
                    opacity: "0.5",
                    marginLeft: "149px",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  10:03
                </span>
              </div>
            </div>
            <div style={{ marginTop: "30px" }}>
              <img
                src="https://qph.fs.quoracdn.net/main-qimg-5c6c4f5eaf10c8d597f5dc7d1c90822e"
                alt="avatar"
                width="40"
                height="45"
                style={{ borderRadius: "50%", marginTop: "-10px" }}
              />
              <div style={{ marginTop: "-50px" }}>
                {" "}
                <strong style={{ margin: "50px", opacity: "0.5" }}>
                  Kaviya
                </strong>
                <br />
                <span style={{ opacity: "0.4", marginLeft: "50px" }}>
                  Where r u
                </span>
                <span
                  style={{
                    opacity: "0.5",
                    marginLeft: "149px",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  10:03
                </span>
              </div>
            </div>

            <div style={{ marginTop: "30px" }}>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D0BAQFdFQtj-He03w/company-logo_200_200/0/1625674118900?e=2159024400&v=beta&t=r-Rc_j8beKW8wlOn3z3Z93VvAcPe3Ge0W3SiiuaFe1w"
                alt="avatar"
                width="40"
                height="45"
                style={{ borderRadius: "50%", marginTop: "-10px" }}
              />
              <div style={{ marginTop: "-50px" }}>
                {" "}
                <strong style={{ margin: "50px", opacity: "0.5" }}>
                  Hr Module Group
                </strong>
                <br />
                <span style={{ opacity: "0.4", marginLeft: "50px" }}>
                  Good Morning
                </span>
                <span
                  style={{
                    opacity: "0.5",
                    marginLeft: "114px",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  10:03
                </span>
              </div>
            </div>
            <div style={{ marginTop: "30px" }}>
              <img
                src="https://qph.fs.quoracdn.net/main-qimg-ba379c87d621ed6e49fb22da9a211fd0.webp"
                alt="avatar"
                width="40"
                height="45"
                style={{ borderRadius: "50%", marginTop: "-10px" }}
              />
              <div style={{ marginTop: "-50px" }}>
                {" "}
                <strong style={{ margin: "50px", opacity: "0.5" }}>
                  Kanaga Valli
                </strong>
                <br />
                <span style={{ opacity: "0.4", marginLeft: "50px" }}>
                  Wat Special Today
                </span>
                <span
                  style={{
                    opacity: "0.5",
                    marginLeft: "90px",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  10:03
                </span>
              </div>
            </div>

            <div style={{ marginTop: "30px" }}>
              <img
                src="https://i.pinimg.com/originals/cc/2b/ff/cc2bff211b31336d42fcc136f06db4ba.png"
                alt="avatar"
                width="40"
                height="45"
                style={{ borderRadius: "50%", marginTop: "-10px" }}
              />
              <div
                style={{
                  marginTop: "-50px",
                  backgroundColor: "skyblue",
                  height: "53px",
                }}
              >
                {" "}
                <strong style={{ margin: "50px", opacity: "0.5" }}>
                  Nivetha
                </strong>
                <br />
                <span style={{ opacity: "0.4", marginLeft: "50px" }}>
                  Can U Come Cinema Today
                </span>
                <span
                  style={{
                    opacity: "0.5",
                    marginLeft: "23px",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  10:03
                </span>
              </div>
            </div>
          </CCard>
        </div>
      </CCard>
      <div></div>
      <CCard style={{ marginLeft: "322px" }}>
        <div>
          <div style={{ margin: "20px", fontSize: "24px" }}>
            <b> Nivetha </b>
          </div>

          <div
            style={{
              color: "green",
              fontSize: "50px",
              marginTop: "-62px",
              marginLeft: "22px",
            }}
          >
            .
          </div>

          <div
            style={{
              opacity: "0.3",
              fontSize: "16px",
              marginTop: "-28px",
              marginLeft: "37px",
            }}
          >
            <b>Active</b> <b>|</b>{" "}
            <div style={{ marginLeft: "65px", marginTop: "-17px" }}>
              {" "}
              <AiOutlineSearch />
            </div>
            <div style={{ marginLeft: "85px", marginTop: "-24px" }}>
              {" "}
              <b>Find</b>
            </div>
          </div>

          <div style={{ float: "right" }}>
            <div
              style={{
                marginLeft: "-100px",
                marginTop: "-30px",
                backgroundColor: "rgb(207 215 214)",
                width: "25px",
                borderRadius: "20px",
              }}
            >
              <FiVideo style={{ marginLeft: "5px" }} />
            </div>
            <div
              style={{
                marginTop: "-18px",
                marginLeft: "-65px",
                backgroundColor: "rgb(207 215 214)",
                width: "25px",
                borderRadius: "20px",
              }}
            >
              <IoCallOutline style={{ marginLeft: "5px" }} />
            </div>
            <div
              style={{
                marginTop: "-22px",
                marginLeft: "-35px",
                backgroundColor: "rgb(207 215 214)",
                width: "25px",
                borderRadius: "20px",
              }}
            >
              <BsPersonPlus style={{ marginLeft: "5px" }} />
            </div>
          </div>

          <div>
            <hr />
          </div>

          <CCard style={{ overflow: "auto", height: "550px" }}>
            <div>
              <div style={{ textAlign: "center", opacity: "0.4" }}>
                {" "}
                16 September 2021
              </div>
              <div
                style={{
                  width: "500px",
                  marginLeft: "60px",
                  marginTop: "-18px",
                }}
              >
                {" "}
                <hr />
              </div>
              <div
                style={{
                  width: "500px",
                  marginLeft: "705px",
                  marginTop: "-11px",
                }}
              >
                {" "}
                <hr />
              </div>

              <div
                style={{
                  marginLeft: "1000px",
                  marginTop: "20px",
                  height: "30px",
                  paddingLeft: "30px",
                  paddingTop: "10px",
                  width: "70px",
                  backgroundColor: "skyblue",
                  borderRadius: "15px 50px",
                }}
              >
                Hii
              </div>

              <div
                style={{
                  marginLeft: "1000px",
                  marginTop: "20px",
                  height: "30px",
                  paddingLeft: "30px",
                  paddingTop: "10px",
                  width: "130px",
                  backgroundColor: "skyblue",
                  borderRadius: "15px 50px",
                }}
              >
                Is This Nivetha
              </div>

              <div
                style={{
                  marginLeft: "1000px",
                  marginTop: "20px",
                  height: "30px",
                  paddingLeft: "30px",
                  paddingTop: "10px",
                  width: "130px",
                  backgroundColor: "skyblue",
                  borderRadius: "15px 50px",
                }}
              >
                I am Jai Bala
              </div>

              <div
                style={{
                  textAlign: "center",
                  marginTop: "20PX",
                  opacity: "0.4",
                }}
              >
                {" "}
                17 September 2021
              </div>
              <div
                style={{
                  width: "500px",
                  marginLeft: "60px",
                  marginTop: "-18px",
                }}
              >
                {" "}
                <hr />
              </div>
              <div
                style={{
                  width: "500px",
                  marginLeft: "705px",
                  marginTop: "-11px",
                }}
              >
                {" "}
                <hr />
              </div>

              <div
                style={{
                  marginLeft: "60px",
                  marginTop: "20px",
                  height: "30px",
                  paddingLeft: "30px",
                  paddingTop: "10px",
                  width: "70px",
                  backgroundColor: "skyblue",
                  borderRadius: "15px 50px",
                }}
              >
                Hii JAI
              </div>

              <div
                style={{
                  marginLeft: "60px",
                  marginTop: "20px",
                  height: "30px",
                  paddingLeft: "30px",
                  paddingTop: "10px",
                  width: "130px",
                  backgroundColor: "skyblue",
                  borderRadius: "15px 50px",
                }}
              >
                How is ur Day
              </div>

              <div
                style={{
                  marginLeft: "1000px",
                  marginTop: "20px",
                  height: "30px",
                  paddingLeft: "30px",
                  paddingTop: "10px",
                  width: "180px",
                  backgroundColor: "skyblue",
                  borderRadius: "15px 50px",
                }}
              >
                Without u Its Good
              </div>

              <div
                style={{
                  marginLeft: "60px",
                  marginTop: "20px",
                  height: "30px",
                  paddingLeft: "30px",
                  paddingTop: "10px",
                  width: "130px",
                  backgroundColor: "skyblue",
                  borderRadius: "15px 50px",
                }}
              >
                Same Here
              </div>

              <div
                style={{
                  marginLeft: "60px",
                  marginTop: "20px",
                  height: "30px",
                  paddingLeft: "30px",
                  paddingTop: "10px",
                  width: "190px",
                  backgroundColor: "skyblue",
                  borderRadius: "15px 50px",
                }}
              >
                ok Bye See U Tomm
              </div>

              <div
                style={{
                  marginLeft: "1000px",
                  marginTop: "20px",
                  height: "30px",
                  paddingLeft: "30px",
                  paddingTop: "10px",
                  width: "130px",
                  backgroundColor: "skyblue",
                  borderRadius: "15px 50px",
                }}
              >
                Ok Bye 😂
              </div>

              <div
                style={{
                  textAlign: "center",
                  marginTop: "20PX",
                  opacity: "0.4",
                }}
              >
                {" "}
                18 September 2021
              </div>
              <div
                style={{
                  width: "500px",
                  marginLeft: "60px",
                  marginTop: "-18px",
                }}
              >
                {" "}
                <hr />
              </div>
              <div
                style={{
                  width: "500px",
                  marginLeft: "705px",
                  marginTop: "-11px",
                }}
              >
                {" "}
                <hr />
              </div>

              <div
                style={{
                  marginLeft: "1000px",
                  marginTop: "20px",
                  height: "30px",
                  paddingLeft: "30px",
                  paddingTop: "10px",
                  width: "70px",
                  backgroundColor: "skyblue",
                  borderRadius: "15px 50px",
                }}
              >
                Hii
              </div>

              <div
                style={{
                  marginLeft: "60px",
                  marginTop: "20px",
                  height: "30px",
                  paddingLeft: "30px",
                  paddingTop: "10px",
                  width: "70px",
                  backgroundColor: "skyblue",
                  borderRadius: "15px 50px",
                }}
              >
                Hii JAI
              </div>

              <div
                style={{
                  textAlign: "center",
                  marginTop: "20PX",
                  opacity: "0.4",
                }}
              >
                {" "}
                19 September 2021
              </div>
              <div
                style={{
                  width: "500px",
                  marginLeft: "60px",
                  marginTop: "-18px",
                }}
              >
                {" "}
                <hr />
              </div>
              <div
                style={{
                  width: "500px",
                  marginLeft: "705px",
                  marginTop: "-11px",
                }}
              >
                {" "}
                <hr />
              </div>

              <div
                style={{
                  marginLeft: "1000px",
                  marginTop: "20px",
                  height: "30px",
                  paddingLeft: "30px",
                  paddingTop: "10px",
                  width: "70px",
                  backgroundColor: "skyblue",
                  borderRadius: "15px 50px",
                }}
              >
                Hii
              </div>

              <div
                style={{
                  marginLeft: "60px",
                  marginTop: "20px",
                  height: "30px",
                  paddingLeft: "30px",
                  paddingTop: "10px",
                  width: "70px",
                  backgroundColor: "skyblue",
                  borderRadius: "15px 50px",
                }}
              >
                Hii JAI
              </div>

              <div
                style={{
                  textAlign: "center",
                  marginTop: "20PX",
                  opacity: "0.4",
                }}
              >
                {" "}
                20 September 2021
              </div>
              <div
                style={{
                  width: "500px",
                  marginLeft: "60px",
                  marginTop: "-18px",
                }}
              >
                {" "}
                <hr />
              </div>
              <div
                style={{
                  width: "500px",
                  marginLeft: "705px",
                  marginTop: "-11px",
                }}
              >
                {" "}
                <hr />
              </div>

              <div
                style={{
                  marginLeft: "1000px",
                  marginTop: "20px",
                  height: "30px",
                  paddingLeft: "30px",
                  paddingTop: "10px",
                  width: "70px",
                  backgroundColor: "skyblue",
                  borderRadius: "15px 50px",
                }}
              >
                Hii 😍
              </div>

              <div
                style={{
                  marginLeft: "60px",
                  marginTop: "20px",
                  height: "30px",
                  paddingLeft: "30px",
                  paddingTop: "10px",
                  width: "100px",
                  backgroundColor: "skyblue",
                  borderRadius: "15px 50px",
                }}
              >
                Hii JAI 💗
              </div>

              <div
                style={{
                  textAlign: "center",
                  marginTop: "20PX",
                  opacity: "0.4",
                }}
              >
                {" "}
                25 September 2021
              </div>
              <div
                style={{
                  width: "500px",
                  marginLeft: "60px",
                  marginTop: "-18px",
                }}
              >
                {" "}
                <hr />
              </div>
              <div
                style={{
                  width: "500px",
                  marginLeft: "705px",
                  marginTop: "-11px",
                }}
              >
                {" "}
                <hr />
              </div>

              <div
                style={{
                  marginLeft: "1000px",
                  marginTop: "20px",
                  height: "30px",
                  paddingLeft: "30px",
                  paddingTop: "10px",
                  width: "220px",
                  backgroundColor: "skyblue",
                  borderRadius: "15px 50px",
                }}
              >
                Can u Come Cinema Today..
              </div>


                { inpushow && (
<div>
<div
                style={{
                  textAlign: "center",
                  marginTop: "20PX",
                  opacity: "0.4",
                }}
              >
                {" "}
                09 October 2021
              </div>
              <div
                style={{
                  width: "500px",
                  marginLeft: "60px",
                  marginTop: "-18px",
                }}
              >
                {" "}
                <hr />
              </div>
              <div
                style={{
                  width: "500px",
                  marginLeft: "705px",
                  marginTop: "-11px",
                }}
              >
                {" "}
                <hr />
              </div>

              <div
               style={{
                marginLeft: "1000px",
                marginTop: "20px",
                height: "30px",
                paddingLeft: "30px",
                paddingTop: "10px",
                width: "220px",
                backgroundColor: "skyblue",
                borderRadius: "15px 50px",
              }}
              >{currentValue ? currentValue : "  "}</div>

              </div>
              )}

            </div>

            
          </CCard>

          <div style={{ marginLeft: "250px", fontSize: "14px" }}>
            via <span style={{ color: "skyblue" }}>Skype \/</span>
          </div>
          <div style={{ textAlign: "center" }}>
            <input
              className={"bored"}
              onChange={(e) => setValue(e.target.value)}
              value={currentValue}
              style={{
                borderRadius: "50px",
                border: "1px solid rgb(207 215 214)",
                backgroundColor: "rgb(207 215 214)",
                width: "800px",
                height: "30px",
              }}
            />
          </div>
          <div style={{ marginLeft: "1010px", marginTop: "-33px" }}>
            <button onClick={showonit}
              style={{ borderRadius: "30px", width: "30px", height: "30px" }}
            >
              >
            </button>
          </div>
        </div>
      </CCard>
    </div>
  );
}

export default Clone;
