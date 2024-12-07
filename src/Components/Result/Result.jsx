import React from 'react'
import {calculateInvestment} from '../../util/investment'

const Result = ({input}) => {

  calculateInvestment(input)
  return (
    <div>
      Hello
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, voluptatum non. Iure, cupiditate veritatis. Harum dignissimos ratione deleniti? Sunt mollitia error quia cumque dolores vitae nostrum dolorum dolorem nobis asperiores.
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium minus repellendus quasi! Laudantium quo earum architecto illo voluptatem placeat tenetur porro, vitae iusto, nemo ipsum amet laborum a ab aliquam.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellendus exercitationem similique saepe perspiciatis, reprehenderit quos cupiditate, consectetur harum obcaecati quibusdam quisquam asperiores labore incidunt voluptatibus accusamus explicabo nam quaerat.
    </div>
  )
}

export default Result;
